FROM node:16.14.2-alpine
WORKDIR /usr/src/server-app
COPY . .
RUN npm install
EXPOSE 5000
CMD ["npm","run","start"]
