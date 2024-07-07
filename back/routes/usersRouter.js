/*  */

const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
//const { usersController } = require('../controllers/indexControllers');

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserByPk);
// router.get("/id/:id", usersController.getUserById);
// router.get("/email/:email", usersController.getUserByMail);
// router.get("/name/:name", usersController.getUserByName); 
// router.get("/lastname/:lastName", usersController.getUserByLastName);
router.post("/", usersController.createUser);
router.delete("/:id", usersController.deleteUser);
router.put("/:id", usersController.updateUser);

module.exports = router;
