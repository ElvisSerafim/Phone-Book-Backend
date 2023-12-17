FROM node:lts

WORKDIR /api

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["yarn", "start:dev"]