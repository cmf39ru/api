const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      consign = require('consign'),
      cors = require('cors'),
      passport = require('passport'),
      passportConfig = require('./passport')(passport),
      jwt = require('jsonwebtoken'),
      config = require('./index.js'),
      mongoose = require('mongoose'),
      database = require('./database')(mongoose, config)

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use(passport.initialize())

app.set('mysecretword', config.secret)
consign({ cwd: './REST' })
      .include('setup/')
      .then('controllers/')
      .then('routes/')
      .into(app)

module.exports = app
