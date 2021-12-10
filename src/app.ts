import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import {router} from './routes/routes';

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

// Redirect
app.get('/', (req, res) => res.redirect('/swagger'));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);

app.listen(PORT, () => console.log("server running on :"+PORT));