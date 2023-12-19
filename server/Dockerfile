FROM node:20-alpine as builder 

WORKDIR /usr/src/app


COPY package*.json ./

COPY . .

COPY .env .env

ENV NODE_OPTIONS="--max_old_space_size=1024"

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]