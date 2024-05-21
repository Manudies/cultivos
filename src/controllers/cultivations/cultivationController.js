import cultivationModel from "../../models/cultivationModel.js";

const getAll = async()=> {
    try {
        const cultivations = await cultivationModel.find();
        return cultivations;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const cultivation = await cultivationModel.findById(id);
        return cultivation;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

const create = async(data) =>{
    try {
        const cultivation = await cultivationModel.create(data);
        return cultivation;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const cultivation = await cultivationModel.findByIdAndUpdate(id,data);
        return cultivation;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const cultivation = await cultivationModel.findByIdAndDelete(id);
        return cultivation;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const addUser = async(cultivationId,userId) =>{
    try {
        const cultivation = await getById(cultivationId);
        if(!cultivation.users.includes(userId)){
            cultivation.users.push(userId);
            await cultivation.save();
            return cultivation
        }
        return cultivation;
    } catch (error) {
        return null;
    }
}
const removeUser = async(cultivationId,userId)=>{
    try {
        const cultivation = await getById(cultivationId);
        if(cultivation.users.includes(userId)){
            cultivation.users = cultivation.users.filter(u=> u!==userId);
            await cultivation.save();
            return cultivation
        }
        return cultivation;
    } catch (error) {
        return null;
    }
}
export const functions = {
    getAll,
    getById,
    create,
    update,
    remove,
    addUser,
    removeUser,
}

export default functions;