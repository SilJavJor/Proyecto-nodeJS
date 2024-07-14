/*  */

const { Account } = require("../models/indexModels");
const messages = require("../config/messagesAccounts.js");

const getAllAccounts = async () => {
    try {
        return await Account.findAll();
    } catch (error) {
        //throw new Error(`Error al obtener las cuentas : ${error.message}`);
        throw new Error( `${messages.ERROR_GETTING_ALL_ACCOUNTS}` ` : ${error.message}`);
    }
};

const getAccountByPk = async (id) => {
    try {
        return await Account.findByPk(id);
    } catch (error) {
        throw new Error(`Error al obtener la cuenta por ID : ${error.message}`);
    }
};

const getAccountById = async (id) => {
    try {
        return await Account.findById(id);
    } catch (error) {
        throw new Error(`Error al obtener la cuenta por ID : ${error.message}`);
    }
};

const createNewAccount = async (data) => {
    try {
        return await Account.create(data);
    } catch (error) {
        throw new Error(`Error al crear la cuenta : ${error.message}`);
    }
};

const deleteAccount = async (id) => {
    try {
        const account = await Account.findByPk(id);
        if (account) {
            await account.destroy();
            return account;
        }
        return null;
    } catch (error) {
        throw new Error(`Error al eliminar la cuenta : ${error.message}`);
    }
};

const updateAccount = async (id, data) => {
    try {
        const account = await Account.findByPk(id);
        if (account) {
            return await account.update(data);
        }
        return null;
    } catch (error) {
        throw new Error(`Error al actualizar la cuenta : ${error.message}`);
    }
};

module.exports = {
    getAllAccounts,
    getAccountByPk,
    getAccountById,
    createNewAccount,
    deleteAccount,
    updateAccount,
};
