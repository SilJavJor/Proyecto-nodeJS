/*  */

const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/gamesController");

router.get("/", gamesController.getAllGames);
router.get("/:id", gamesController.getGameByPk);
//router.get("/id/:id", gamesController.getGameById);
router.post("/", gamesController.createGame);
router.delete("/:id", gamesController.deleteGame);
router.put("/:id", gamesController.updateGame);

module.exports = router;
