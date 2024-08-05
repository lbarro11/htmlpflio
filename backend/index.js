import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = "/workspaces/htmlpflio/";
const app=express();
const port =3000;
app.use(bodyParser.urlencoded({extended:true}));

function authenticate (req,res,next){
    console.log(req.body);
    next();
};

app.use(authenticate);

app.get("/",(req,res) =>{
  res.sendFile(__dirname + "/index.html");
});
app.post("/login",(req,res) => {

res.send(`<h1>Senha incorreta</h1>`);

});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });