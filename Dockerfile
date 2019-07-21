FROM node:latest
COPY package.json /app/
RUN cd /app && \
    npm install && \
    npm install -g nodemon
WORKDIR /app
EXPOSE ${PORT}
CMD npm run development