docker build --build-arg BUILD_VERSION=0.0.0 -t music-video .
docker run --name video  -p 5000:5000 -v /data:/data -d music-video:latest --build-args BUILD_VERSION=0.0.0
