FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install

COPY ./ ./
COPY /devops/essential/build ./build
COPY /devops/essential/public ./public


CMD ["npm", "run", "dev"]