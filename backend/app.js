const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const errorHandlers = require('./handlers/errorHandlers')

// create our Express app
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.currentPath = req.path
  next()
});

// After all that above middleware, we finally handle our own routes!
app.use('/', routes)

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound)

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors)
}

// production error handler
app.use(errorHandlers.productionErrors)

// done! we export it so we can start the site in start.js
module.exports = app;
