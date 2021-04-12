FROM node

# Setting Working Directory
WORKDIR /usr/src/app

# Installing Dependencies
COPY package.json .
RUN npm install

# Building typescript
ADD . .
ADD ../Python\ Scripts/bin/serial_to_redis.py ./src/routes/
RUN npm run build

# Start
CMD [ "npm", "run", "production" ]
EXPOSE 3002