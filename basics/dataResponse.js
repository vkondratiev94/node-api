const http = require('http')

const data = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Mike',
  },
  {
    id: 3,
    name: 'Peter',
  },
]

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Content-Language', 'en-US')
  res.setHeader('Date', new Date(Date.now()))
  res.setHeader('X-Powered-By', 'node.js')

  res.end(JSON.stringify({
    data,
    success: true,
    results: data.length,
  }))
})

server.listen(3000, () => {
  console.log('Server is started')
})