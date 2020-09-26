require("dotenv").config();

const username = process.env.NAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const host = process.env.HOST;
const node_env = process.env.NODE_ENV;

const config = {
  dev: {
    node_env: node_env,
    db: {
      username,
      password,
      database,
      host,
    },
  },
  staging: {},
  prod: {},
};

module.exports = config[node_env];
