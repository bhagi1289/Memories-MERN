import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from "./routes/posts.js";

const app = express();



app.use(bodyParser.json({limit:'30mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}));
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://root:P%40ssw0rd@mern.u1netpt.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

app.use('/posts', postRoutes);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology:true })
.then(()=>{
    app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`));
})
.catch(err=>{

    console.log("Error while connecting to DB........")
    console.log(err.message);
});

mongoose.set('strictQuery', true);



