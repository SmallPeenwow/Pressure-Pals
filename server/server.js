import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

app.get('/', async (req, res) => {
	res.send('Hello World!');
});

app.listen(3000, function () {
	console.log('listening');
});
