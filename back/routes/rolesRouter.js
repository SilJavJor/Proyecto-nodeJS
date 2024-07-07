/*  */

const express = require("express");
const router = express.Router();
const rolesController = require("../controllers/rolesController");

router.get("/", rolesController.getAllRoles);
router.get("/:id", rolesController.getRolByPk);
// router.get("/id/:id", rolesController.getRoleById);
router.post("/", rolesController.createRol);
router.delete("/:id", rolesController.deleteRol);
router.put("/:id", rolesController.updateRol);

module.exports = router;
