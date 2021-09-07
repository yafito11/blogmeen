const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost:27017/idstack_blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({
    limit: "50mb",
    extended: false
}))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

require('./src/routes/home.routes')(app)
require('./src/routes/blog.routes')(app)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`starting development server: http://localhost:${PORT}`)
})