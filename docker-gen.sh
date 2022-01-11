#!/usr/bin/env bash

docker build -t music-video .
docker tag music-video:latest xusai2014/music-video
docker push xusai2014/music-video
