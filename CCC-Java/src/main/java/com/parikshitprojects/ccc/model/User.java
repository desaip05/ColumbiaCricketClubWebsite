package com.parikshitprojects.ccc.model;

import java.io.IOException;
import java.io.Serializable;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
@XmlRootElement(name = "user")
public class User implements Serializable {

   private static final long serialVersionUID = 1L;
   private int id;
   private String username;
   private String password;
   private long lastSeen;
   public User(){}
   
   public User(String username, String password){
      this.username = username;
      this.password = password;
   }

   public int getId() {
      return id;
   }

   @XmlElement
   public void setId(int id) {
      this.id = id;
   }

   public String getUsername() {
      return username;
   }
   
   @XmlElement
   public void setUsername(String username) {
      this.username = username;
   }
   

   public String getPassword() {
      return password;
   }
   
   @XmlElement
   public void setPassword(String password) {
      this.password = password;
   }
   
   public long getLastSeen() {
		return lastSeen;
	}

	@XmlElement
	public void setLastSeen(long lastSeen) {
		this.lastSeen = lastSeen;
	}
  
   @Override
   public String toString() {
	   ObjectMapper mapper = new ObjectMapper();
	   try {
		String jsonInString = mapper.writeValueAsString(this);
		return jsonInString;
	} catch (JsonGenerationException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (JsonMappingException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	   return "";
//	   return new StringBuffer(" {\"user\":{")
//		   	.append(" \"id\" : \"").append(this.id).append("\",")
//			.append(" \"name\" : \"").append(this.name).append("\",")
//			.append(" \"username\" : \"").append(this.username).append("\",")
	}
   
}
