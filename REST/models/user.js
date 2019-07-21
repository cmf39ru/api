const mongoose = require('mongoose'),
      bcrypt = require('bcrypt-nodejs')

const Schema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

Schema.pre('save', function (next) {
  const user = this
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (error, salt) => {
    if (error) return next(error)
    bcrypt.hash(user.password, salt, null, (error, hash) => {
      if (error) return next(error)
      user.password = hash
        next()
      })
    })
  } else {
    return next()
  }
})

Schema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, (error, matches) => {
    if (error) return callback(error)
    callback(null, matches)
  })
}

mongoose.model('User', Schema)
