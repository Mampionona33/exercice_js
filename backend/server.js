const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const public = path.join(__dirname, 'public');
app.get('/', (req, res) => {
  res.sendFile(public, 'index.html');
});
app.use(express.static(public));

console.log(public);
console.log(__dirname, 'script.js');

app.listen(port, () => {
  console.log(`server start on port : ${port}`);
});
