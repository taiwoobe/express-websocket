const express = require("express");

//App setup
const app = express();
const port = 3000;

const server = app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

// Static files
app.use(express.static('public'));