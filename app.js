const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/' , function (req,res) {
 res.sendFile(__dirname + './public/index.html')
})


app.listen( 1609 || process.env.PORT , function () {
  console.log("Hello world");
}) 