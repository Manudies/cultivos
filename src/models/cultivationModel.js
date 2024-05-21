import mongoose from "mongoose";

const cultivationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: false
    },
    image: {
        type: String,
        require: false
    },
    plague: {
        type: String,
        require: false
    },
    users: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "users"
        }
    ]
})  


const cultivationModel = mongoose.model("cultivation",cultivationSchema);

export default cultivationModel;