const express = require("express");
const path = require("path");
const fs = require("fs");
const port = 5000;
const app = express();


// app.use(express.static('static', optional))

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) //For serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'pug') //Set the template engine as pug
// app.set('views', path.join(direname, 'views')) // set the views directory
app.set('views', path.join(__dirname, 'views')); // set the views directory


//ENDPOINTS

app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('index.pug', params);

})

//START THE SERVER

app.listen(port, ()=>{
    console.log(`The application started sucessfully on port ${port}`);
});
