const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('hello')
})

app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log('app is running!')
})