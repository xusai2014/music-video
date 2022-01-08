FROM node:lts-alpine as base-stage
WORKDIR /app
COPY . /app
ENV NEXT_TELEMETRY_DEBUG=1
RUN yarn config set cache-folder /usr/local/Caches/yarn && yarn

FROM base-stage as prod-stage
WORKDIR /app
COPY . /app
RUN yarn run build
RUN yarn run start
EXPOSE 4000
ENTRYPOINT ["/sbin/tini", "--", "./docker_entrypoint.sh"]
