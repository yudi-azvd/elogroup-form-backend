const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/', async (req, res) => {
  console.log(req.body)
  return res.json({ ok: true })
})

app.listen(8080)