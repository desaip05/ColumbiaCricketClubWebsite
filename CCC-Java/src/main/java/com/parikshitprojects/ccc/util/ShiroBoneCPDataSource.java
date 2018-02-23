package com.parikshitprojects.ccc.util;

import com.jolbox.bonecp.BoneCPConfig;
import com.jolbox.bonecp.BoneCPDataSource;

//Import

public class ShiroBoneCPDataSource extends BoneCPDataSource {
	/**
	* 
	*/
	private static final long serialVersionUID = -2248923051363839327L;
	/**
	* 
	*/
	public ShiroBoneCPDataSource() {
		super();
		this.setDriverClass("com.mysql.cj.jdbc.Driver");
		this.setJdbcUrl("jdbc:mysql://localhost:3306/cccdb?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC");
		this.setUsername("root");
		this.setPassword("super-secret-123");
		this.setMaxConnectionsPerPartition(10);
	}
	/**
	* @param config
	*/
	public ShiroBoneCPDataSource(BoneCPConfig config) {
		super(config);
	}
}