import mongoose from "mongoose";
import cultivationApiController from "../controllers/cultivations/cultivationApiController";

const commentSchema = new mongoose.Schema({
    user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
    post: {
        type: String,
        require: true
    },
    cultivation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cultivations"
    }
})  


const commentModel = mongoose.model ("comment", commentSchema);

export default commentModel;