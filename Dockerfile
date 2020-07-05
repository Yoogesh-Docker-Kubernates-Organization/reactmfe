FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install

COPY ./devops/essential/build ./build
COPY ./devops/essential/public ./public
COPY ./ ./


CMD ["npm", "run", "dev"]