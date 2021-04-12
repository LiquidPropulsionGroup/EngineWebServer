FROM node:alpine

# Setting Working Directory
WORKDIR /usr/src/app

# Installing Dependencies
COPY package.json .
RUN npm install
RUN apk add python3 bash
RUN pip3 install pyserial redis

# Building typescript
ADD . .
ADD ./src/routes/serial_to_redis.py ./src/routes/
RUN npm run build

# Start
CMD [ "npm", "run", "production" ]
EXPOSE 3002