const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('hello world');
});

app.use(express.static(path.join(__dirname,'public')));

app.listen(port, () => {
	console.log(`server start on port ${port}`);
})