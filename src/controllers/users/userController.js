import userModel from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const getAll = async()=> {
    try {
        const users = await userModel.find();
        return users;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const user = await userModel.findById(id);
        return user;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}
const getByProperty = async(property,value) =>{
    try {
        const user = await userModel.find({[property]:value})
        return user;
    } catch (error) {
        return null;
    }
}
const register = async(data) =>{
    try {
        const {email,username,password,passwordRepeat} = data;
        if(!email || !username || !password || !passwordRepeat){
            return {error:"Todos los campos son obligatorios"};
        }
        if(password !== passwordRepeat){
            return {error:"Las contraseñas no coinciden"};
        }
        const userData = {
            email,
            username,
            password,
            role:"user"
        }
        const user = await userModel.create(userData);
        return user;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const login = async(data) =>{
    const {email,user, password} = data;
    if((!email && !username) || !password){
        return {error:"Faltan datos"};
    }
    try{
        let user;
        if(email){
        user = await getByProperty("email",email);
        user = user[0];
        }
        else{
            user = await getByProperty("username",username);
            user = user[0];
        }
        if(!user){
            return {error:"Usuario no encontrado"};
        }

        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return {error:"Contraseña incorrecta"};
        }
        const token = jwt.sign({
            _id:user._id,
            username:user.username,
            role:user.role}, 
            process.env.JWT_SECRET, {expiresIn: "1h"});
        return {token};
    }
    catch(error){
        return {error:"Error al iniciar sesión"}
    }
}

const create = async(data) =>{
    try {
        const hash = await bcrypt.hash(data.password,10);
        data.password = hash;
        const user = await userModel.create(data);
        return user;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const user = await userModel.findByIdAndUpdate(id,data);
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const user = await userModel.findByIdAndDelete(id);
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const functions = {
    getAll,
    getById,
    getByProperty,
    register,
    login,
    create,
    update,
    remove
}

export default functions;