package com.parikshitprojects.ccc;

import org.apache.log4j.Logger;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.config.IniSecurityManagerFactory;
import org.apache.shiro.realm.jdbc.JdbcRealm;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.Factory;

import com.parikshitprojects.ccc.model.User;

import java.io.IOException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Root resource (exposed at "auth" path)
 */
@Path("auth")
public class Authentication implements ContainerResponseFilter {
	private static Logger log = Logger.getLogger(Authentication.class);

	@POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response login(User user) throws Exception{
		String output = "";
		int statusCode = 200;
		Subject subject = authenticateWithShiro(user.getUsername(), user.getPassword());
		if (subject != null && subject.isAuthenticated()) {
			output = "successfull login";
		} else {
			statusCode = 401;
			output = "Failed log in";
		}
//		subject.getPrincipal();
		System.out.println(subject.getPrincipals());
		UsernamePasswordToken token = new UsernamePasswordToken(
				user.getUsername(), user.getPassword());
		log.info("2: " + token.toString());
		
		write();
        return Response.status(statusCode).entity(token).build();
    }    
	
	
	/**
	 * 
	 * @param username
	 * @param pass
	 */
	private Subject authenticateWithShiro(String username, String pass) {

		Subject currentUser = null;
		try {
			log.info("Authentication with shiro is started...");

			Factory<org.apache.shiro.mgt.SecurityManager> factory = new IniSecurityManagerFactory(
					"classpath:shiro.ini");
			org.apache.shiro.mgt.SecurityManager securityManager = factory
					.getInstance();
			// the key "jdbcRealm" must be the same in the shiro.ini file.
			JdbcRealm realm = (JdbcRealm) ((IniSecurityManagerFactory) factory)
					.getBeans().get("jdbcRealm");
			realm.setAuthenticationQuery("SELECT password FROM player WHERE username=?");
			realm.setUserRolesQuery("SELECT role.name FROM role,player_roles,player WHERE role.id=player_roles.role_id AND player_roles.player_id=player.id AND player.username=?");
			realm.setPermissionsQuery("SELECT permission FROM role_permission,role WHERE role_permission.role_id=role.id AND role.name=?");
			realm.setPermissionsLookupEnabled(true);
			SecurityUtils.setSecurityManager(securityManager);

			currentUser = SecurityUtils.getSubject();

			// let's login the current user so we can check against roles and
			// permissions:
			if (!currentUser.isAuthenticated()) {
				UsernamePasswordToken token = new UsernamePasswordToken(
						username, pass);
				token.setRememberMe(true);
				currentUser.login(token);
			}
		} catch (Exception e) {
			log.error("Authentication failed", e);
		}
		return currentUser;

	}
	public void write(){
		Subject subject= SecurityUtils.getSubject();
		if(subject.hasRole("Administrator")){
			log.info("has role administrator");
		}else{
			log.info("has no role");
		}
		if(subject.isPermitted("admin:write")){
			log.info("Administrator is permitted to write");
		}else{
			log.info("Administrator is NOT permitted to write");
		}
	}
	

	 @Override
	 public void filter(ContainerRequestContext creq, ContainerResponseContext
	 cresp) throws IOException {
	
	 cresp.getHeaders().putSingle("Access-Control-Allow-Origin", "*");
	 cresp.getHeaders().putSingle("Access-Control-Allow-Credentials", "true");
	 cresp.getHeaders().putSingle("Access-Control-Allow-Methods", 
			 "GET, POST, DELETE, PUT, OPTIONS, HEAD");
	 cresp.getHeaders().putSingle("Access-Control-Allow-Headers",
	 "Content-Type, Accept, X-Requested-With");
	
	 }
}