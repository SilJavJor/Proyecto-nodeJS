/*  */

const express = require("express");
const router = express.Router();
const gamersController = require("../controllers/gamersController");

router.get("/", gamersController.getAllGamers);
router.get("/:id", gamersController.getGamerByPk);
//router.get("/:id", gamersController.getGamerById);
router.post("/", gamersController.createGamer);
router.delete("/:id", gamersController.deleteGamer);
router.put("/:id", gamersController.updateGamer);

module.exports = router;
