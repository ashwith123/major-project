const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hi broooo root ");
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});
