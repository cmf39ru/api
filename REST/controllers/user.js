const mongoose = require('mongoose')
const api = {}

api.setup = (User) => (req, res) => {
  const admin = new User({
    username: 'admin',
    password: 'admin'
  })
  admin.save(error => {
    if (error) throw error
    res.json({ success: true, message: 'Admin account created' })
  })
}

api.index = (User, Token) => (req, res) => {
  const token = Token
  if (token) {
    User.find({}, (error, users) => {
      if (error) throw error
      res.status(200).json({ users: users })
    })
  } else return res.status(403).send({ success: false, message: 'Unauthorized' })
}

api.info = (User, Token) => (req, res) => {
  const token = Token
  if (token) {
    User.findOne({ _id: req.query._id }, (error, user) => {
      if (error) throw error
      res.status(200).json({ data: user })
    })
  } else return res.status(403).send({ success: false, message: 'Unauthorized' })
}

api.signup = (User) => (req, res) => {
  if (!req.body.username || !req.body.password) res.json({ success: false, message: 'Please, pass an username and password.' })
  else {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    })

    user.save(error => {
      if (error) return res.status(400).json({ success: false, message: 'Username already exists.' })
      res.json({ success: true, message: 'Account created successfully' })
    })
  }
}

module.exports = api
