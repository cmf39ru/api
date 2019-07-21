const mongoose = require('mongoose')

const FrontSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  stitle: String,
  innerwidth: Number,
  backcolor: String,
  stylish: {
    _id: Number,
    stitle: String,
    title: String
  },
  material: {
    _id: Number,
    stitle: String,
    title: String
  },
  cutimage: {
    originalname: String,
    mimetype: String,
    location: String
  },
  elements: [{
    code: String,
    title: String,
    wmin: Number,
    wmax: Number,
    hmin: Number,
    hmax: Number,
    originalname: String,
    mimetype: String,
    location: String
  }],
  samples: [{
    originalname: String,
    mimetype: String,
    location: String,
    texture: {
      code: String,
      title: String,
      location: String
    },
    color: {
      title: String,
      code: String
    }
  }],
  renders: [{
    originalname: String,
    mimetype: String,
    location: String
  }]
})

mongoose.model('Front', FrontSchema)
