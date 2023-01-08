const express = require('express');
const path = require('path')

const app = express();

const PORT = 3000
app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})

app.get('/', (req, res) => {
    // res.send('hello world')
    res.sendFile(path.join(__dirname, "index.html"))
})
