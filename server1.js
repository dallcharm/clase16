const express = require('express')

const path = require('path')
const app = express()

//const serveMiddleware = serveStatic(path.resolve(__dirname,'static'))



function myFirstMiddleware(request,response,next){
    console.log('Soy un middleware')
    next()
}

function rootHandler (request,response){
 response.set('Content-Type','text/plain')
 response.status(201)
 response.send('Hello World')
 
}

function searchHandler(request,response){
    response.send(request.query.q)
}


app.use('/static',express.static('static'))
//app.use(myFirstMiddleware)
app.all('/',rootHandler)
app.get('/search',searchHandler)
app.listen(9000)



