FROM node:lts-alpine

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install && mv node_modules ../
COPY . .

EXPOSE 3000
RUN chown -R node /usr/src/app
RUN chmod +x start.sh

USER node
CMD ["./start.sh"]
