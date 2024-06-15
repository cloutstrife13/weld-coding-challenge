FROM node:18

WORKDIR /app/worker

COPY yarn.lock package.json ./

RUN yarn install

COPY . .

EXPOSE 3002

CMD ["yarn", "dev:worker"]