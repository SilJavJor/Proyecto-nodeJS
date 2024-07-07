/*  */

const { Gamer } = require("../models/indexModels");

const getAllGamers = async () => {
    try {
        return await Gamer.findAll();
    } catch (error) {
        throw new Error(`Error al obtener los gamers: ${error.message}`);
    }
};

const getGamerByPk = async (id) => {
    try {
        return await Gamer.findByPk(id);
    } catch (error) {
        throw new Error(`Error al obtener el gamer por ID: ${error.message}`);
    }
};

const getGamerById = async (id) => {
    try {
        return await Gamer.findById(id);
    } catch (error) {
        throw new Error(`Error al obtener el gamer por ID: ${error.message}`);
    }
};
const createNewGamer = async (data) => {
    try {
        return await Gamer.create(data);
    } catch (error) {
        throw new Error(`Error al crear el gamer: ${error.message}`);
    }
};

const deleteGamer = async (id) => {
    try {
        const gamer = await Gamer.findByPk(id);
        if (gamer) {
            await gamer.destroy();
            return gamer;
        }
        return null;
    } catch (error) {
        throw new Error(`Error al eliminar el gamer: ${error.message}`);
    }
};

const updateGamer = async (id, data) => {
    try {
        const gamer = await Gamer.findByPk(id);
        if (gamer) {
            return await gamer.update(data);
        }
        return null;
    } catch (error) {
        throw new Error(`Error al actualizar el gamer: ${error.message}`);
    }
};

module.exports = {
    getAllGamers,
    getGamerByPk,
    getGamerById,
    createNewGamer,
    deleteGamer,
    updateGamer,
};
