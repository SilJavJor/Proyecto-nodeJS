/* Serviccios para usuarios */

const { userProvider } = require("../providers/indexProviders");

// Obtiene todos los usuarios
const getAllUsers = async () => {
    try {
        return await userProvider.getAllUsers();
    } catch (error) {
        //throw new Error(`Error al obtener todos los usuarios : ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

// Obtiene un usuario por PK
const getUserByPk = async (id) => {
    try {
        return await userProvider.getUserByPk(id);
    } catch (error) {
        //throw new Error(`Error al obtener el usuario por PK : ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

// Obtiene un usuario por ID
const getUserById = async (id) => {
    try {
        return await userProvider.getUserById(id);
    } catch (error) {
        //throw new Error(`Error al obtener el usuario por ID : ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const getUserByMail = async (email) => {
    try {
        return await userProvider.getUserByMail(email);
    } catch (error) {
        //throw new Error(`Error al obtener el usuario por correo : ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const createUser = async (data) => {
    try {
        return await userProvider.createNewUser(data);
    } catch (error) {
        //throw new Error(`Error al crear el usuario : ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const deleteUser = async (id) => {
    try {
        return await userProvider.deleteUser(id);
    } catch (error) {
        //throw new Error(`Error al eliminar el usuario : ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const updateUser = async (id, data) => {
    try {
        return await userProvider.updateUser(id, data);
    } catch (error) {
        //throw new Error(`Error al actualizar el usuario : ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

module.exports = {
    getAllUsers,
    getUserByPk,
    getUserById,
    getUserByMail,
    createUser,
    deleteUser,
    updateUser,
};
