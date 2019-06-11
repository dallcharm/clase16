const express = require('express')
var serveStatic = require('serve-static')
const app = express()

const serveMiddleware = serveStatic('static')


app.use(serveMiddleware)
