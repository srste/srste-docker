CREATE DATABASE IF NOT EXISTS `srstee`;
CREATE DATABASE IF NOT EXISTS `camunda_db`;

# create proxy user and grant rights
CREATE USER 'proxyuser'@'localhost' IDENTIFIED BY 'srstee';
GRANT ALL ON *.* TO 'proxyuser'@'%';

SET GLOBAL max_allowed_packet=1073741824;
select @max_allowed_packet;
Select @@global.max_allowed_packet;