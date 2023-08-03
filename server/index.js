import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
dotenv.config();
const app=express();



app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());
app.use('/posts',postRoutes);

app.get('/', (req,res) =>{
res.send('Hello to Media-Book API');
});

//mongodb


const port = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL)
.then(() => app.listen(port, ()=> console.log(`Server running on port : ${port}`)))
.catch((error) => console.log(error.message));


