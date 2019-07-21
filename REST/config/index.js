require('dotenv').config()
module.exports = {
  secret: 'mysecretword',
  session: { session: false },
  database: process.env.MONGO_ACL
}
