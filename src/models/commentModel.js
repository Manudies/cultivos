import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
    ],
    post: {
        type: String,
        require: true
    },
})  


const commentModel = mongoose.model ("comment", commentSchema);

export default commentModel;