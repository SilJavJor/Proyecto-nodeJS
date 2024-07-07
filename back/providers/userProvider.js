/*  */

const { User } = require("../models/indexModels");

const getAllUsers = async () => {
    try {
        return await User.findAll();
    } catch (error) {
        throw new Error(`Error al obtener todos los usuarios : ${error.message}`);
    }
};

const getUserByPk = async (id) => {
    try {
        return await User.findByPk(id);
    } catch (error) {
        throw new Error(`Error al obtener el usuario por ID : ${error.message}`);
    }
};

const getUserById = async (id) => {
    try {
        return await User.findById(id);
    } catch (error) {
        throw new Error(`(Provider) Error al obtener el usuario por ID : ${error.message}`);
    }
};

const getUserByMail = async (email) => {
    try {
        return await User.findOne({ where: { email } });
    } catch (error) {
        throw new Error(`Error al obtener el usuario por correo : ${error.message}`);
    }
};

const getUserByName = async (name) => {
    try {
        return await User.findAll({ where: { name } });
    } catch (error) {
        throw new Error(`Error al obtener el usuario por nombre : ${error.message}`);
    }
};

const getUserByLastName = async (lastName) => {
    try {
        return await User.findAll({ where: { lastName } });
    } catch (error) {
        throw new Error(`Error al obtener el usuario por apellido : ${error.message}`);
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
    getUserByName,
    getUserByLastName,
    createNewUser,
    deleteUser,
    updateUser,
};
