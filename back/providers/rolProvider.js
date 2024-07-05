/*  */

const { Rol } = require("../models/indexModels");

const getAllRoles = async () => {
    try {
        return await Rol.findAll();
    } catch (error) {
        throw new Error(`Error al obtener los roles: ${error.message}`);
    }
};

const getRolByPk = async (id) => {
    try {
        return await Rol.findByPk(id);
    } catch (error) {
        throw new Error(`Error al obtener el rol por ID: ${error.message}`);
    }
};

const getRolById = async (id) => {
    try {
        return await Rol.findById(id);
    } catch (error) {
        throw new Error(`Error al obtener el rol por ID: ${error.message}`);
    }
};

const createNewRol = async (data) => {
    try {
        return await Rol.create(data);
    } catch (error) {
        throw new Error(`Error al crear el rol: ${error.message}`);
    }
};

const deleteRol = async (id) => {
    try {
        const rol = await Rol.findByPk(id);
        if (rol) {
            await rol.destroy();
            return rol;
        }
        return null;
    } catch (error) {
        throw new Error(`Error al eliminar el rol: ${error.message}`);
    }
};

const updateRol = async (id, data) => {
    try {
        const rol = await Rol.findByPk(id);
        if (rol) {
            return await rol.update(data);
        }
        return null;
    } catch (error) {
        throw new Error(`Error al actualizar el rol: ${error.message}`);
    }
};

module.exports = {
    getAllRoles,
    getRolByPk,
    getRolById,
    createNewRol,
    deleteRol,
    updateRol,
};
