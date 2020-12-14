const express = require('express')

const app = express()

// Requests body parser
app.use(express.json())

// Requesting to http://localhost:3000/express?poweredBy=node
app.get('/:name', (req, res) => {
  console.log(req.query) // { poweredBy: 'node' }
  console.log(req.method) // GET
  console.log(req.params.name) // express

  res.status(200).json({
    message: 'All about request object.'
  })
})

app.post('/', (req, res) => {
  console.log(req.body)
})

app.listen(3000, () => {
  console.log('Server is started')
})