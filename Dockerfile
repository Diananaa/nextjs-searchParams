FROM node:16-alpine
RUN mkdir -p /app
WORKDIR /app
COPY package.json ./
COPY . .
RUN yarn install
CMD ["yarn", "dev"]