FROM node:13.12.0-alpine3.10

# set working directory
WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

EXPOSE 5000

COPY . /app/
RUN yarn
#RUN yarn  build
#RUN yarn global add serve



CMD ["yarn", "start"]
