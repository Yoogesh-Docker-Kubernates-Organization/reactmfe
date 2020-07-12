FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install

COPY ./ ./
COPY /MFE/client/resources/devops/essential/pre_build ./build
COPY /MFE/client/resources/devops/essential/pre_public ./public


CMD ["npm", "run", "prod"]


#FROM nginx
#COPY --from=builder /usr/app/public /usr/share/nginx/html
#COPY --from=builder /usr/app/build /usr/share/nginx/html