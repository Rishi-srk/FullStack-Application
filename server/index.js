import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './routes/posts.js';
const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.use('/posts',postRoutes);

const url="mongodb+srv://memories:memories@cluster0.sgkrzbs.mongodb.net/?retryWrites=true&w=majority"
const port=process.env.port || 5000
mongoose.set('strictQuery', true)
// mongoose.set('useFindAndModify',false);
mongoose.connect(url,{
    useNewUrlParser:true,
    // useFindAndModify: false,
    useUnifiedTopology:true,

}).then(()=>app.listen(port,()=>console.log("Listening on port 5000.........")))
.catch((err)=>console.log(err))



