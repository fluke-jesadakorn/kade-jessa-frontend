FROM node:16-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app

COPY . .

RUN yarn

RUN yarn build

COPY . .

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]