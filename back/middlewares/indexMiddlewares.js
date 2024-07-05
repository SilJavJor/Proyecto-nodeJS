/*  */

const cors = require("cors");
const express = require("express");

const setupMiddlewares = (app) => {
    app.use(cors());
    app.use(express.json());
};

module.exports = setupMiddlewares;
