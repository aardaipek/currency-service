import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, () => "server running on :"+port);