FROM node:18

ENV VITE_SERVER_URL=${VITE_SERVER_URL}

WORKDIR /client

COPY public/ /client/public

COPY src/ /client/src

COPY index.html /client/

COPY package.json /client/

COPY vite.config.ts /client/

COPY tsconfig.json /client/

COPY tsconfig.app.json /client/

COPY tsconfig.node.json /client/

RUN npm install

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "preview"]