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
  res.end(JSON.stringify({
    data,
    success: true,
    results: data.length,
  }))
})

server.listen(3000, () => {
  console.log('Server is started')
})