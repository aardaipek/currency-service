import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';
const PORT = process.env.PORT || 4200;
let cors = require('cors');
const app = express();

app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Working!!!'));

app.use('/api', routes);

app.listen(PORT, () => console.log("server running on :"+PORT));