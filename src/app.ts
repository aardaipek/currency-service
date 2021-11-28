import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

const PORT = process.env.PORT || 4200;

const app = express();

import fs = require('fs');
let swaggerFile: any = (process.cwd()+"/src/swagger.json");
let swaggerData: any = fs.readFileSync(swaggerFile, 'utf8');
let swaggerDocument = JSON.parse(swaggerData);

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
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', routes);

app.listen(PORT, () => console.log("server running on :"+PORT));