const express = require('express');
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());    

app.get('/', (req,res)=>{
    res.send('Hello world!');
});

app.listen(3000, ()=>{
    console.log('Server listening on port 3000....');
});