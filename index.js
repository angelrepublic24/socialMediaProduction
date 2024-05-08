const connection = require('./database/connection');
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');


dotenv.config()
const {PORT, DB_URI} = process.env
connection(DB_URI);
// console.log('Databae server started')

const app = express();

// Set up Cors
app.use(cors());
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Routes
let user_route = require('./routes/user');
let post_route = require('./routes/post');
let follow_route = require('./routes/follow');

app.use('/', express.static('dist', {redirect:false}))
app.use('/api/user', user_route)
app.use('/api/post', post_route)
app.use('/api/follow', follow_route)

app.get("*", (req, res, next) => {
    return res.sendFile(path.resolve('dist/index.html'));
})

app .listen(PORT, () => {
    console.log('server listening on port: ' + PORT);
});
