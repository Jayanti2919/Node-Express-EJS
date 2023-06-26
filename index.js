var express = require('express')
var path = require('path')
var expressLayout = require('express-ejs-layouts')

var app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(expressLayout)

app.get('/', (req, res)=>{
    res.render('index', {
        name: "Jayanti",
    })
})

app.get('/about', (req, res)=>{
    res.render('about')
})

app.listen(8000, ()=>{console.log("Server running on port 8000")})