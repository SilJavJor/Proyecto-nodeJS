/*  */

const { userProvider } = require("../providers/indexProviders");

const getAllUsers = async () => {
    try {
        return await userProvider.getAllUsers();
    } catch (error) {
        throw new Error(`Error al obtener todos los usuarios : ${error.message}`);
    }
};

const getUserByPk = async (id) => {
    try {
        return await userProvider.getUserByPk(id);
    } catch (error) {
        throw new Error(`(Service) Error al obtener el usuario por PK : ${error.message}`);
    }
};

const getUserById = async (id) => {
    try {
        return await userProvider.getUserById(id);
    } catch (error) {
        throw new Error(`Error al obtener el usuario por ID : ${error.message}`);
    }
};

const getUserByMail = async (email) => {
    try {
        return await userProvider.getUserByMail(email);
    } catch (error) {
        throw new Error(`Error al obtener el usuario por correo : ${error.message}`);
    }
};

const getUserByName = async (name) => {
    try {
        return await userProvider.getUserByName(name);
    } catch (error) {
        throw new Error(`Error al obtener el usuario por nombre : ${error.message}`);
    }
};

const getUserByLastName = async (lastName) => {
    try {
        return await userProvider.getUserByLastName(lastName);
    } catch (error) {
        throw new Error(`Error al obtener el usuario por apellido : ${error.message}`);
    }
};

const createUser = async (data) => {
    try {
        return await userProvider.createNewUser(data);
    } catch (error) {
        throw new Error(`Error al crear el usuario : ${error.message}`);
    }
};

const deleteUser = async (id) => {
    try {
        return await userProvider.deleteUser(id);
    } catch (error) {
        throw new Error(`Error al eliminar el usuario : ${error.message}`);
    }
};

const updateUser = async (id, data) => {
    try {
        return await userProvider.updateUser(id, data);
    } catch (error) {
        throw new Error(`Error al actualizar el usuario : ${error.message}`);
    }
};

module.exports = {
    getAllUsers,
    getUserByPk,
    getUserById,
    getUserByMail,
    getUserByName,
    getUserByLastName,
    createUser,
    deleteUser,
    updateUser,
};
