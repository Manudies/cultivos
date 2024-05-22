import userApiController from "../users/userApiController.js";
import commentController from "./commentController.js";

const getAll = async(req,res)=>{
    const comments = await commentController.getAll();
    res.json({data:comments});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const comment = await commentController.getById(id);
    res.json({data:comment});
}

const getByProperty=async(req,res)=>{
    const {property,value}=req.query;
    const comments = await commentController.getByProperty(property,value);
    res.json({data:comments})
}

const create = async(req,res)=>{
    const comment = await commentController.create(req.body);
    res.json({data:comment})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const comment = await commentController.update(id,req.body);
    res.json({data:comment})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const comment = await commentController.remove(id);
    res.json({data:comment})
}

const removeUser = async(req, res)=>{
    const commentId = req.params.commentId;
    const userId = req.params.userId;
    const comment = await commentController.removeUser(commentId,userId);
    res.json({data:comment})}

export default{
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove,
    removeUser
}