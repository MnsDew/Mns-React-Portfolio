const express = require ("express");
const {randomMathal, randomTen} = require("./handler.js");

const app = express();

//allow to outside accsess to this server
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
    });

    //API call get
    //this api function will return 1 random MATHAL or quote
    app.get("/quotes/random" , (req,res) => {
        res.json(randomMathal());
    });
    // the secon api will return 10 Amthal or quotes by random type 
    app.get("/quotes/ten" , (req,res) => {
        res.json(randomTen());
    });


// error handling 
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500; //500 error means the error from internal server 

    res.status(statusCode).json({
        type: "error" , 
        message: err.message
    })
})
    
// now we wanna create the port 
const PORT = 3004;
app.listen(PORT, () =>{
    console.log("Server started on PORT " + PORT);
})