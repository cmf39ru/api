FROM node:latest
COPY package.json /app/
COPY .env.prod /app/.env
RUN cd /app && \
    npm install && \
    npm install -g nodemon
WORKDIR /app
EXPOSE ${PORT}
CMD npm run development
