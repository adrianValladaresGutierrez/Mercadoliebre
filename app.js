const express = require('express');
const app = express();
const path = require ('path');

app.listen(3000, () => console.log("En orden"));
app.use ( express.static( path.join(__dirname, './Mercadoliebre/public')));

app.get('/', (req, res) =>{
    res.sendFile(path.resolve('./Mercadoliebre/views/index.html'));
})