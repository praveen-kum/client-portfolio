const express = require('express');
const cors =require('cors')
require('./db')
const app = express();
app.use(cors())
app.use(express.json())
const emp = require('./Routes/route')
const user =require('./Routes/Users');
const news = require('./Routes/News');
const login = require('./Routes/login');
const image = require('./Routes/images');
const res = require('./Routes/resume');
const about = require('./Routes/about');
const role = require('./Routes/roles');
const experience1 = require('./Routes/experience1');
const contact = require('./Routes/contact');

// routes
app.use('/login',login)
app.use('/images',image)
app.use('/',emp)
app.use('/news',news)
app.use('/users',user)
app.use('/resume',res)
app.use('/about',about)
app.use('/roles',role)
app.use('/experience1',experience1)
app.use('/contact',contact)
app.listen(4000)
