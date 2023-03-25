const express = require('express');

// express app 

const app = express();

// listen for requests 

app.listen(3000);

app.get('/' , (req , res)=>{
// res.send('<p> Home page </p>'); to send a respose
res.sendFile('./views/index.html' , {root : __dirname});
// __dirname used for the curent folder

}) ;

app.get('/about' , (req , res)=>{
  //  res.send('<p> bout page </p>');
  res.sendFile('./views/about.html' , {root : __dirname});
}) ;

// rdirects 

app.get('/about-us' , (req , res)=>{
  res.redirect('/about');
});

// dafault case 404 page 

app.use((req , res)=>{
res.sendFile('./views/404.html' , {root : __dirname});
});



