FROM node:18

WORKDIR /app

COPY src/ /app/src

COPY package.json /app

COPY . /app/

RUN npm install

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]

