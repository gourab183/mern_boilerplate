import express from 'express';
import path from 'path';
var app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.get('/',(request, response)=> {
    response.sendFile('index.html');
});

app.listen('8080', ()=> {
    console.log('Server started at port 8080');
})