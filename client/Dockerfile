FROM node:16.14.2-alpine
WORKDIR /usr/src/client-app
COPY package*.json .
# COPY package-lock.json .
RUN ls
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","run","start"]
