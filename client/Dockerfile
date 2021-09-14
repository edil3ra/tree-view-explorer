FROM node:15
WORKDIR /code
COPY package*.json ./
RUN npm install

COPY . /code/
EXPOSE 8080
CMD ["npm", "start"]
