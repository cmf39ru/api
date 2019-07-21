require('dotenv').config()
require('module-alias/register')

const http = require('http'),
      API = require('@rAPI'),
      server = http.Server(API),
      API_PORT = process.env.PORT || 3001
      LOCAL = '0.0.0.0'

server.listen(API_PORT, LOCAL, () => console.log(`API server running on ${API_PORT}`))

module.exports = server
