/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/example" : "/",
};
