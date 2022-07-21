import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello world'));

app.get('/users', () => {});

app.get('/emails', () => {});

app.listen(3000);
