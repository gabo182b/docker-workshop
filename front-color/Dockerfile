FROM node:16.16.0-alpine3.16 AS builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install
RUN npm install react-scripts@5.0.1 -g
COPY . ./
RUN npm run build

FROM node:16.16.0-alpine3.16
WORKDIR /app
COPY --from=builder /app/build /app
RUN npm install http-server -g
EXPOSE 8080
CMD ["http-server", "-o", "--cors"]

