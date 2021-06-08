FROM node

WORKDIR /app
COPY src /app
RUN npm install nodemon -g

ENTRYPOINT [ "nodemon", "dist/server.js" ]