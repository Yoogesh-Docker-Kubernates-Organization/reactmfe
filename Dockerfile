FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install

COPY ./ ./
COPY /devops/essential/pre_build ./build
COPY /devops/essential/pre_public ./public


CMD ["npm", "run", "dev"]