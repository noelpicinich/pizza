import 'reflect-metadata';
import 'dotenv';
import Express from 'express';
import { useExpressServer } from 'routing-controllers';
import path from 'path';

const app = Express();

useExpressServer(app, {
    controllers: [path.join(__dirname + '/controllers/**/*.ts')]
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

