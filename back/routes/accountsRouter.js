/*  */

const express = require("express");
const router = express.Router();
const accountsController = require("../controllers/accountsContorller");

router.get("/", accountsController.getAllAccounts);
router.get("/:id", accountsController.getAccountByPk);
//router.get("/id/:id", accountsController.getAccountById);
router.post("/", accountsController.createAccount);
router.delete("/:id", accountsController.deleteAccount);
router.put("/:id", accountsController.updateAccount);

module.exports = router;