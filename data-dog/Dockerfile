FROM node:15.3.0-alpine3.10
# Env
ENV TIME_ZONE=Asia/Shanghai
ENV ENV_NAME dev
ENV EGG_SERVER_ENV dev
ENV NODE_ENV dev
ENV NODE_CONFIG_ENV dev

# Set the timezone in docker
# RUN apk --update add tzdata \\
#    && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \\
#    && echo "Asia/Shanghai" > /etc/timezone \\
#    && apk del tzdata

# Create Directory for the Container
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install --production
# Copy all other source code to work directory
ADD . /usr/src/app
# Start
CMD [ "npx","sequelize","db:migrate","&","npm", "start" ]

EXPOSE 7001
