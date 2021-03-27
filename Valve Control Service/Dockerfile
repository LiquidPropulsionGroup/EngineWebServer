# Using Node Docker Image
FROM node

# Setting Working Directory
WORKDIR /usr/src/app

# Installing Dependencies
COPY package.json .
RUN npm install

# Building typescript
ADD . .
RUN npm run build

# Start
CMD [ "npm", "run", "production" ]
EXPOSE 5000