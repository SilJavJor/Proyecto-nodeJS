/*  */

const { User } = require("../models/indexModels");
const messages = require("../config/messagesUsers.js");

const getAllUsers = async () => {
    try {
        return await User.findAll();
    } catch (error) {
        //throw new Error(`Error al obtener todos los usuarios : ${error.message}`);
        throw new Error( `${messages.ERROR_GETTING_ALL_USERS}` ` : ${error.message}`);
    }
};

const getUserByPk = async (id) => {
    try {
        return await User.findByPk(id);
    } catch (error) {
        throw new Error(`Error al obtener el usuario por PK : ${error.message}`);
    }
};

const getUserById = async (id) => {
    try {
        return await User.findById(id);
    } catch (error) {
        throw new Error(`Error al obtener el usuario por ID : ${error.message}`);
    }
};

const getUserByMail = async (email) => {
    try {
        return await User.findOne({ where: { email } });
    } catch (error) {
        throw new Error(`Error al obtener el usuario por correo electronico : ${error.message}`);
    }
};

const createNewUser = async (data) => {
    try {
        return await User.create(data);
    } catch (error) {
        throw new Error(`Error al crear el usuario : ${error.message}`);
    }
};

const deleteUser = async (id) => {
    try {
        const user = await User.findByPk(id);

        if (user) {
            await user.destroy();

            return user;
        }
        return null;
    } catch (error) {
        throw new Error(`Error al eliminar el usuario : ${error.message}`);
    }
};

const updateUser = async (id, data) => {
    try {
        const user = await User.findByPk(id);
        
        if (user) {
            return await user.update(data);
        }
        return null;
    } catch (error) {
        throw new Error(`Error al actualizar el usuario: ${error.message}`);
    }
};

module.exports = {
    getAllUsers,
    getUserByPk,
    getUserById,
    getUserByMail,
    createNewUser,
    deleteUser,
    updateUser,
};
