/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import fs from 'fs';
import qr from 'qr-image'

inquirer.prompt([{
    message: "Type in your URL: ",
    name: "URL",
  },]).then((answers) => {
    // Use user feedback for... whatever!!
    const URL = answers.URL;
    var qr_png = qr.image(URL, {type: 'png'});
    qr_png.pipe(fs.createWriteStream('url_qr.png'));
    fs.writeFile("url.txt", URL, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
      
   
  })