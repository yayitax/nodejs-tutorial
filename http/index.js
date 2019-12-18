// const http = require('http')
// const port = 3000

// const requestHandler = (request, response) => {
//     console.log(request.url)
//     response.end('Hello Node.js Server!')
// }

// const server = http.createServer(requestHandler)

// server.listen(port, (err) => {
//     if (err) {
//         return console.log('something bad happened', err)
//     }

//     console.log(`server is listening on ${port}`)
// })

/**
 * Using Express
 */
const express = require('express')
const app = express()
const port = 3000

// app.get('/', (request, response) => {
//     response.send('Hello from Express!')
// })

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})

/**
 * Using Express & Handlebars
 */
const path = require('path')
const exphbs = require('express-handlebars')


app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
    response.render('home', {
        name: 'John'
    })
})