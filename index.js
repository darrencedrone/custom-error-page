const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.send('Howdy')
})

app.all('*', (request, response) => {
  return response.status(404).send('Looks like your web request went to the Shadow Realm, Jimbo!')
})

app.listen(1984)
