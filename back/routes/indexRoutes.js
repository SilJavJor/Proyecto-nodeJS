/*  */

const usersRouter = require("./usersRouter");
const rolesRouter = require("./rolesRouter");
const accountsRouter = require("./accountsRouter");
const gamersRouter = require("./gamersRouter");
const gamesRouter = require("./gamesRouter");
const scoresRouter = require("./scoresRouter");

const setupRoutes = (app) => {
    app.get("/", (req, res) => {
        res.send("Estas en el home del servidor");
    });

    app.use("/users", usersRouter);
    app.use("/roles", rolesRouter);
    app.use("/accounts", accountsRouter);
    app.use("/gamers", gamersRouter);
    app.use("/games", gamesRouter);
    app.use("/scores", scoresRouter);
};

module.exports = setupRoutes;
