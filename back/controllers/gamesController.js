/*  */

const gameService = require("../services/gameService");
const messages = require("../config/messagesGames.js");

const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAllGames();

        if (games) {
            res.json(games);
        } else {
            res.status(404).json({ error: `${messages.GAMES_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getGameByPk = async (req, res) => {
    try {
        const game = await gameService.getGameByPk(req.params.id);

        if (game) {
            res.json(game);
        } else {
            res.status(404).json({ error: `${messages.GAME_NOT_FOUND}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getGameById = async (req, res) => {
    try {
        const game = await gameService.getGameById(req.params.id);

        if (game) {
            res.json(game);
        } else {
            res.status(404).json({ error: `${messages.GAME_NOT_FOUND}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createGame = async (req, res) => {
    try {
        const newGame = await gameService.createGame(req.body);

        res.status(201).json(newGame);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteGame = async (req, res) => {
    try {
        const deletedGame = await gameService.deleteGame(req.params.id);

        if (deletedGame) {
            res.json(deletedGame);
        } else {
            res.status(404).json({ error: `${messages.GAME_NOT_FOUND}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateGame = async (req, res) => {
    try {
        const updatedGame = await gameService.updateGame(req.params.id, req.body);

        if (updatedGame) {
            res.json(updatedGame);
        } else {
            res.status(404).json({ error: `${messages.GAME_NOT_FOUND}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = {
    getAllGames,
    getGameByPk,
    getGameById,
    createGame,
    deleteGame,
    updateGame,
};
