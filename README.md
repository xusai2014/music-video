###
[语义化控制版本规范](https://semver.org/lang/zh-CN/)
### 部署

```shell script
docker build --build-arg BUILD_VERSION=0.0.0 -t music-video .
docker run --name video  -p 5000:5000 -v /data:/data -d music-video --build-args BUILD_VERSION=0.0.0

sudo yum erase $(rpm -qa | grep mongodb-org)
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongodb


docker run --name mongodb -v ~/docker/mongo:/data/db -p 27017:27017 -d mongo

```
