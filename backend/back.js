//const fs = require("fs");

//fs.writeFile("message.txt", "Hello from node", (err) => {
//    if (err) throw err;
//    console.log("the file has been saved");
//});

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
//var qr = require('qr-image)');
inquirer
.prompt([
    {
    message:"type your url",
    name:"URL",
    }
])
    .then((answers) => {
        const url=answares.URL;
        console.log(url);
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("ar.png"));
        
    })
    .catch((error)=>{
        if (error.isTtyError){

        }else{

        }
    });

    