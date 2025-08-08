const express = require('express')
const app = express()
const peopleRouter = require('./routh/people')
const auth = require('./routh/auth')

// Middleware for parsing
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Static files
app.use(express.static('../Nodejs/method_public'))

// Use the people router
app.use('/api/people', peopleRouter)
app.use('/login', auth)
// Login route

app.listen(5000, () => {
  console.log('hello listening')
})
