/*  */

const { Game } = require("../models/indexModels");

const getAllGames = async () => {
    try {
        return await Game.findAll();
    } catch (error) {
        throw new Error(`Error al obtener los games: ${error.message}`);
    }
};

const getGameByPk = async (id) => {
    try {
        return await Game.findByPk(id);
    } catch (error) {
        throw new Error(`Error al obtener el game por ID: ${error.message}`);
    }
};

const getGameById = async (id) => {
    try {
        return await Game.findById(id);
    } catch (error) {
        throw new Error(`Error al obtener el game por ID: ${error.message}`);
    }
};

const createNewGame = async (data) => {
    try {
        return await Game.create(data);
    } catch (error) {
        throw new Error(`Error al crear el game: ${error.message}`);
    }
};

const deleteGame = async (id) => {
    try {
        const game = await Gamer.findByPk(id);
        if (game) {
            await game.destroy();
            return game;
        }
        return null;
    } catch (error) {
        throw new Error(`Error al eliminar el game: ${error.message}`);
    }
};

const updateGame = async (id, data) => {
    try {
        const game = await Game.findByPk(id);
        if (game) {
            return await game.update(data);
        }
        return null;
    } catch (error) {
        throw new Error(`Error al actualizar el game: ${error.message}`);
    }
};

module.exports = {
    getAllGames,
    getGameByPk,
    getGameById,
    createNewGame,
    deleteGame,
    updateGame,
};
