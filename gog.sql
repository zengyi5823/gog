SET NAMES UTF8;
DROP DATABASE IF EXISTS gog;
CREATE DATABASE gog CHARSET=UTF8;
USE gog;
#用户表
CREATE TABLE gog_user(
	id INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(128),
	email VARCHAR(32)
);
INSERT INTO gog_user values(NULL,"dongdong","123456","zengyi5823@163.com"),
		        (NULL,"zongzong","123456","zengyi5823@163.com"),
			(NULL,"songsong","123456","zengyi5823@163.com"),
			(NULL,"tom","123456","zengyi5823@163.com"),
			(NULL,"ff14","123456","zengyi5823@163.com"),
			(NULL,"goggog","123456","zengyi5823@163.com");
			