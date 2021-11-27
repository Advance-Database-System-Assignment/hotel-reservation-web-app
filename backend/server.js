const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require ('dotenv');
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
    res.send("It works"); 
});

app.use(express.json());
app.use(cookieParser());
 
//connect to mongoDB
const URL= process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
const connection =mongoose.connection;
connection.once("open", ()=>{
    console.log("connection success")
})



app.listen(PORT,()=>{
    console.log(`Server running on PORT: ${PORT}`)
})







