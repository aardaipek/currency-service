import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';
const PORT = process.env.PORT || 4200;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, () => console.log("server running on :"+PORT));