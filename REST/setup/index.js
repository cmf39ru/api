const mongoose = require('mongoose'),
      UserModel = require('@models/user'),
      PaletteModel = require('@models/palette')
      FrontModel = require('@models/front')

const models = {
  User: mongoose.model('User'),
  Palette: mongoose.model('Palette'),
  Front: mongoose.model('Front')
}

module.exports = models
