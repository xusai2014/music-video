FROM node:lts-alpine as base-stage

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
EXPOSE 4000
ENTRYPOINT ["/sbin/tini", "--", "./docker_entrypoint.sh"]
