const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const PaletteSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  noflat: { // defines which array to use: colors vs textures
    type: Boolean
  },
  colors: [{
    code: {
      type: String,
      maxlength: 11, // rgb (255,255,255)
      required: true
    },
    title: {
      type: String
    }
  }],
  textures: [{
    code: Number,
    title: String,
    originalname: String,
    mimetype: String,
    location: String
  }]
})
PaletteSchema.plugin(uniqueValidator)
mongoose.model('Palette', PaletteSchema)
