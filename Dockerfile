FROM node:alpine3.15 as base-stage
WORKDIR /app
COPY . /app
ENV NEXT_TELEMETRY_DEBUG=1
RUN yarn global add pm2
RUN pm2 install pm2-logrotate \
  && pm2 set pm2-logrotate:max_size 50M \
  && pm2 set pm2-logrotate:retain 10
RUN yarn
RUN yarn run build
RUN rm -rf node_modules

FROM base-stage as prod-stage
WORKDIR /app
RUN yarn install --production

EXPOSE 80
ENTRYPOINT ["/bin/sh", "--", "./docker_entrypoint.sh"]
