import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongo.js";
import router from "./routes/router.js";

dotenv.config();
const CONTAINER_PORT = 3000;

const app = express();
app.use(express.json());
connectDB();
app.get("/",(req,res)=>{
    res.json({message:"Hello World"});
})

app.use("/api",router);

app.listen(CONTAINER_PORT,()=>{
    console.log("aplicación en marcha en el puerto " +process.env.APP_PORT)
})