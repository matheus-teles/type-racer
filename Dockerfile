FROM node:8.16.0

WORKDIR /typeracer

COPY package.json .

RUN npm install

COPY . .