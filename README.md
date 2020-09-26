# Engine Web Server

The purpose of the Liquid Propulsion Group web server is to provide a REST api to control circuits through I2C or SPI communication bus. We hope to build it with web technologies to make this more accessiable to the modern programer. **The intention of this webserver is only ment to be used on a rocket test stand using a raspberry pi or similar SBC.** The reason to use a webserver on a rocket engine is so we have a more open source communication system for tests using everyday off the shelf networking tools like routers and patch antenas.

## Why TypeScript?

Most modern REST api's are made with javascript but, not every engineer knows javascript. TypeScript on the other hand makes transitioning from languages like C, Java, RUST, and even Arduino easy because its a typed languaged. In addition, TypeScript was developed and designed for large applications in mind; Liquid Propulsion Group plans to levrage this heavly in the future.

## Requirements

To start development you must have:

- Node.js
- TypeScript

## Install

1. Fork or clone the main repository found [here](https://github.com/LiquidPropulsionGroup/EngineWebServer)
2. In the EngineWebServer folder run `npm install`
3. Run the project using the following command `npm run start`

## Projects Baisc Structure

**src Folder:**
In the scr folder all of our TypeScript code will live in. This is also the folder that we will compile down to javascript.

**src/app.ts File:**
app.ts is a file in our src folder where our express routing functionality is initialized.

**src/index.ts File:**
index.ts is a file in our src folder where we will expose the express process on our local machine.

## Authors

- Brian Almaguer/Haro ([BalmaBrian](https://github.com/BalmaBrian))
