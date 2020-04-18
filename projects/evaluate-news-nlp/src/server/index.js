const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
let text = {};
let data = {};
//*
// set aylien API credentias
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
//
app.use(express.static('dist'));
const aylien = require('aylien_textapi');
const textapi = new aylien({
   application_id: process.env.API_ID,
   application_key: process.env.API_KEY,
});

const port = 3000;
app.listen(port, () => {
   console.log(`Listening on localhost port ${port}........\n\n`);
});

//
//Post Route
app.post('/myPostRoute', (req, res) => {
   text = req.body;
   console.log('post received', data);
   textapi.sentiment(
      {
         text: text.inputText,
         mode: 'tweet',
      },
      function (error, response) {
         if (error === null) {
            data = response;
            console.log(data, 'API res!!');
         } else {
            console.log(error);
         }
      }
   );
});
//
//Get Route
app.get('/myGetRoute', (req, res) => {
   console.log(`\n\n`, data, `data has been sent\n\n`);
   res.send(data);
});
