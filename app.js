const express = require('express')
const path = require('path')
const faker = require('faker')
const cors = require('cors')

const app = express()
const port = 3000 || process.env.PORT

app.use(cors())

app.get ('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/generate', (req, res) => {
  const randomName = faker.name.findName()
  res.send(randomName)
})

app.listen (port, () => {
  console.log(`server running in http://localhost:${port}`)
})
