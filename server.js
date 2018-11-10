import { readFileSync } from 'fs';

try{
    console.log("Starting");
var data = readFileSync('sample.json');
}
catch(error)
{
    console.log(error);

}
var words=JSON.parse(data);

import { urlencoded } from 'body-parser';
console.log(words.entries[0].programType);
import express, { static } from 'express';

var app=express();

app.use(static('website'));
app.use(urlencoded({extended:false}));

app.get('/:programtype',(req, res) => {

    req.param(words);
    res.json(words.title);


  });
  app.listen(3000);
