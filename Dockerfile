FROM node:lts-alpine

WORKDIR /app
COPY . /app
RUN yarn
RUN yarn run build
RUN yarn run start
EXPOSE 4000
ENTRYPOINT ["/sbin/tini", "--", "./docker_entrypoint.sh"]
