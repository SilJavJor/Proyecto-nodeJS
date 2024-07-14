/*  */

const { accountProvider } = require("../providers/indexProviders");

const getAllAccounts = async () => {
    try {
        return await accountProvider.getAllAccounts();
    } catch (error) {
        //throw new Error(`Error al obtener las cuentas : ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const getAccountByPk = async (id) => {
    try {
        return await accountProvider.getAccountByPk(id);
    } catch (error) {
        //throw new Error(`Error al obtener la cuenta por PK : ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const getAccountById = async (id) => {
    try {
        return await accountProvider.getAccountById(id);
    } catch (error) {
        //throw new Error(`Error al obtener la cuenta por ID : ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const createAccount = async (data) => {
    try {
        return await accountProvider.createNewAccount(data);
    } catch (error) {
        //throw new Error(`Error al crear la cuenta : ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const deleteAccount = async (id) => {
    try {
        return await accountProvider.deleteAccount(id);
    } catch (error) {
        //throw new Error(`Error al eliminar la cuenta : ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const updateAccount = async (id, data) => {
    try {
        return await accountProvider.updateAccount(id, data);
    } catch (error) {
        //throw new Error(`Error al actualizar la cuenta : ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

module.exports = {
    getAllAccounts,
    getAccountByPk,
    getAccountById,
    createAccount,
    deleteAccount,
    updateAccount,
};
