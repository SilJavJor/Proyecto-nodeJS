/*  */

const express = require("express");
const router = express.Router();
const scoresController = require("../controllers/scoresController");

router.get("/", scoresController.getAllScores);
router.get("/:id", scoresController.getScoreByPk);
// router.get("/:id", scoresController.getScoreById);
router.post("/", scoresController.createScore);
router.delete("/:id", scoresController.deleteScore);
router.put("/:id", scoresController.updateScore);

module.exports = router;
