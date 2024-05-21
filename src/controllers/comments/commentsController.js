import commentModel from "../../models/cultivationModel.js";

const getAll = async()=> {
    try {
        const comments = await commentModel.find();
        return comments;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const comment = await commentModel.findById(id);
        return comment;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

const create = async(data) =>{
    try {
        const comment = await commentModel.create(data);
        return comment;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const comment = await commentModel.findByIdAndUpdate(id,data);
        return comment;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const comment = await commentModel.findByIdAndDelete(id);
        return comment;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const addUser = async(commentId,userId) =>{
    try {
        const comment = await getById(commentId);
        if(!comment.users.includes(userId)){
            comment.users.push(userId);
            await comment.save();
            return comment
        }
        return comment;
    } catch (error) {
        return null;
    }
}
const removeUser = async(commentId,userId)=>{
    try {
        const comment = await getById(commentId);
        if(comment.users.includes(userId)){
            comment.users = comment.users.filter(u=> u!==userId);
            await comment.save();
            return comment
        }
        return comment;
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