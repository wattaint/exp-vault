FROM node:8.16.0-stretch-slim

COPY package.json package-lock.json /
RUN npm install

COPY . /app
WORKDIR /app
