const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('static'))

app.get('/', (req, res)=>
{
    res.render('index')
})

app.get('/about', (req, res)=>
{
    res.render('about')
})
app.get('/pricing', (req, res)=>
{
    res.render('pricing')
})
app.get('/contact', (req, res)=>
{
    res.render('contact')
})

app.listen(2000)