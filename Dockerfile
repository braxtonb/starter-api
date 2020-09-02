FROM node:14.9.0-alpine

#set port
ENV PORT 8080

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN npm ci

EXPOSE 8080

CMD ["npm", "run", "dev"]