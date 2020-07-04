FROM node:alpine

MAINTAINER Yoogesh Sharma "yoogesh1983@gmail.com"

# Copy every thing from the current working directory i.e. reactmfe to current working directory of the container
COPY ./ ./

RUN npm install

CMD ["npm", "run", "dev"]