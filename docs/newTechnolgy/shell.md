#### 1、文件目录相关


#### 2、统计相关
find -name "*.txt" | wc -l
awk '{print $1}'
cat file | wc -l

#### 3、网络相关
netstat -antp | grep 8080
