FROM node:15.3.0-alpine3.10 as builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM nginx:stable-alpine as fortune-cat-prod
# Env
ENV TIME_ZONE=Asia/Shanghai
ENV ENV_NAME production
ENV EGG_SERVER_ENV production
ENV NODE_ENV production
ENV NODE_CONFIG_ENV production

COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx/default.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
