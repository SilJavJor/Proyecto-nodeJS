/*  */

const { rolProvider } = require("../providers/indexProviders");

const getAllRoles = async () => {
    try {
        return await rolProvider.getAllRoles();
    } catch (error) {
        //throw new Error(`Error al obtener los roles: ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const getRolByPk = async (id) => {
    try {
        return await rolProvider.getRolByPk(id);
    } catch (error) {
        //throw new Error(`Error al obtener el rol por ID: ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const getRolById = async (id) => {
    try {
        return await rolProvider.getRolById(id);
    } catch (error) {
        //throw new Error(`Error al obtener el rol por ID: ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const createRol = async (data) => {
    try {
        return await rolProvider.createNewRol(data);
    } catch (error) {
        //throw new Error(`Error al crear el rol: ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const deleteRol = async (id) => {
    try {
        return await rolProvider.deleteRol(id);
    } catch (error) {
        //throw new Error(`Error al eliminar el rol: ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const updateRol = async (id, data) => {
    try {
        return await rolProvider.updateRol(id, data);
    } catch (error) {
        //throw new Error(`Error al actualizar el rol: ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

module.exports = {
    getAllRoles,
    getRolByPk,
    getRolById,
    createRol,
    deleteRol,
    updateRol,
};
