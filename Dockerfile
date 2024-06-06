FROM node:18

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn install

COPY . .

EXPOSE 3001

CMD ["yarn", "start"]