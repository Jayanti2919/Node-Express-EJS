var express = require('express')
var path = require('path')

var app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index', {
        name: "Jayanti",
    })
})

app.listen(8000, ()=>{console.log("Server running on port 8000")})