FROM node:20-alpine as builder 

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

COPY .env .env

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]