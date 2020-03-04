require('dotenv/config')

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/', async (req, res) => {
  return res.json({ ok: true })
})


const PORT = process.env.PORT  || 8080

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})