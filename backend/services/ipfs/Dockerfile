FROM node:18-alpine

WORKDIR /ipfs

COPY . ./

RUN npm install

EXPOSE 3001

CMD ["node", "index.js"]