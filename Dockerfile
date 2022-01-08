FROM node:lts-alpine as base-stage

ARG BUILD_VERSION=0.0.0
ENV YARN_CACHE_FOLDER /cache/yarn
ENV NPM_CONFIG_CACHE /cache/npm
WORKDIR /app
COPY . /app
ENV NEXT_TELEMETRY_DEBUG=1
RUN yarn


FROM base-stage as prod-stage
WORKDIR /app
COPY . /app
RUN yarn run build
RUN yarn run start
EXPOSE 5000
ENTRYPOINT ["/sbin/tini", "--", "./docker_entrypoint.sh"]
