/*  */

const { gamerProvider } = require("../providers/indexProviders");

const getAllGamers = async () => {
    try {
        return await gamerProvider.getAllGamers();
    } catch (error) {
        throw new Error(`Error al obtener los gamers: ${error.message}`);
    }
};

const getGamerByPk = async (id) => {
    try {
        return await gamerProvider.getGamerByPk(id);
    } catch (error) {
        throw new Error(`Error al obtener el gamer por ID: ${error.message}`);
    }
};

const getGamerById = async (id) => {
    try {
        return await gamerProvider.getGamerById(id);
    } catch (error) {
        throw new Error(`Error al obtener el gamer por ID: ${error.message}`);
    }
};

const createGamer = async (data) => {
    try {
        return await gamerProvider.createNewGamer(data);
    } catch (error) {
        throw new Error(`Error al crear el gamer: ${error.message}`);
    }
};

const deleteGamer = async (id) => {
    try {
        return await gamerProvider.deleteGamer(id);
    } catch (error) {
        throw new Error(`Error al eliminar el gamer: ${error.message}`);
    }
};

const updateGamer = async (id, data) => {
    try {
        return await gamerProvider.updateGamer(id, data);
    } catch (error) {
        throw new Error(`Error al actualizar el gamer: ${error.message}`);
    }
};

module.exports = {
    getAllGamers,
    getGamerByPk,
    getGamerById,
    createGamer,
    deleteGamer,
    updateGamer,
};
