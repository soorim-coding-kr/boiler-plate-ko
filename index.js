var express = require('express');
var app = express();
var port = 5000;
// mongodb+srv://soorim:dlawl0818!@bolier-plate.lvfjw.mongodb.net/?retryWrites=true&w=majority
const mongoose = require('mongoose');
mongoose
	.connect(
		'mongodb+srv://soorim:dlawl0818!@bolier-plate.lvfjw.mongodb.net/?retryWrites=true&w=majority'
		// {
		// 	useNewUrlParser: true,
		// 	useUnifiedTopology: true,
		// 	useCreateIndex: true,
		// 	useFindAndModify: false,
		// }
	)
	.then(() => console.log('MongoDB Connected..'))
	.catch(err => console.log(err));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
	res.send('Hello World !');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
