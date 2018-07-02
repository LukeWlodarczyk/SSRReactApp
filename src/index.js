import express from 'express';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
	res.send(renderer(req));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Server is running on port ' + port);
});
