FROM node:16.13.2 AS build-app 

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build

FROM node:16.13.2

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn --prod

COPY --from=build-app /app/dist /app/dist

EXPOSE 3000

ENTRYPOINT [ "node", "dist/main" ]