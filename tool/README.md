# pierced
钉钉内网穿透
教程地址: https://developers.dingtalk.com/document/tutorial/create-a-robot?spm=a2q3p.21071111.0.0.4e32cym4cym4tR
TCP 穿透需要在数据库里面执行：
GRANT ALL PRIVILEGES ON *.* TO root@'%' IDENTIFIED BY '123456';
FLUSH PRIVILEGES;
数据库连接命令：
mysql -h vaiwan.com -u root -p -P 1234 //端口号地址
