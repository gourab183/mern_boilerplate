import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDb } from './connect-db';

var app = express();

const PORT = process.env.PORT || 7777;

app.use(
    cors(),
    bodyParser.urlencoded({extended: true}),
    bodyParser.json()
);

app.post('/task', async (req, res)=> {
    let db = await connectDb();
    let count = await db.collection('tasks').insertMany([req.body]);
    console.log('count',count);
    res.status(200).send(count);
});

app.listen(PORT, ()=> console.log('Server listening on port',PORT));