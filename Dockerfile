FROM node:alpine

WORKDIR /user/src/app

COPY . .

RUN yarn install --frozen-lockfile

# Build the app
RUN yarn run build

EXPOSE 4000

CMD [ "node", "dist/main.js" ]
