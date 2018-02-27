-- ----------------------------
-- Records of players
-- ----------------------------
INSERT INTO `cccdb`.`Player`(`id`,`first_name`,`username`,`password`,`email_id`)
VALUES (1,'admin','admin','admin','desaip05@gmail.com');
INSERT INTO `cccdb`.`Player` (`id`,`first_name`,`username`,`password`) 
VALUES (2,'user','user','123');
-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', 'Administrator');
INSERT INTO `role` VALUES ('2', 'User');
-- ----------------------------
-- Records of role_permission
-- ----------------------------
INSERT INTO `role_permission` VALUES ('1', 'admin:*');
INSERT INTO `role_permission` VALUES ('2', 'user:read');
-- ----------------------------
-- Records of player_roles
-- ----------------------------
INSERT INTO `player_roles` VALUES ('1', '1', 'Administrator');
INSERT INTO `player_roles` VALUES ('2', '2', 'User');


