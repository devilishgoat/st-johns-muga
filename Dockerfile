FROM node

WORKDIR /server

COPY src/server .

RUN yarn install

WORKDIR /app

COPY src/muga-form .

RUN yarn install