const projectData = {}
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch')
const myApiKey = process.env.API_KEY;

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Cors for cross origin allowance
const cors = require("cors")
app.use(cors())

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
    console.log(`Your API key is ${myApiKey}`);
})



    
app.post('/addData', async function(req, res) {
    API_URL = `https://api.meaningcloud.com/sentiment-2.1?key=${myApiKey}&lang=auto&of=json&txt=${req.body.content}`;
    const data = await fetch(API_URL);

    try{
        const result = await data.json()
        console.log(result)
        res.send(result)
        projectData = result
        console.log("This is projectdata", projectData)

    } catch(error){
        console.log(error)
    }

    
})

    
    
