FROM node:16.16.0-alpine3.16

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN npm install

RUN mkdir -v cache

COPY . ./

EXPOSE 3001

CMD ["npm", "start"]