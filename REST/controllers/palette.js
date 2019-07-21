const mongoose = require('mongoose')

const api = {}

api.store = (Palette, Token) => (req, res) => {
  if (!Token) {
    return res.status(403).send({ success: false, message: 'Unauthorized' })
  } else {
    const palette = new Palette({
      name: req.body.name,
      noflat: req.body.noflat
    })

    palette.save(error => {
      if (error) return res.status(400).json(error)
      res.status(200).json({ success: true, message: "Palette successfuly stored", object: palette })
    })
  }
}

api.getAll = (Palette, Token) => (req, res) => {
  if (!Token) {
    return res.status(403).send({ success: false, message: 'Unauthorized' })
  } else {
    Palette.find().sort({name: 1}).exec((error, palettes) => {
      if (error) res.status(400).json(error)
      res.status(200).json(palettes)
    })
  }
}

api.getOne = (Palette, Token) => (req, res) => {
  if (!Token) {
    return res.status(403).send({ success: false, message: 'Unauthorized' })
  } else {
    Palette.findOne({ _id: req.query._id }, (error, palette) => {
      if (error) res.status(400).json(error)
      res.status(200).json(palette)
    })
  }
}

api.edit = (Palette, Token) => (req, res) => {
  if (!Token) {
    return res.status(403).send({ success: false, message: 'Unauthorized' })
  } else {
    Palette.findOneAndUpdate({ _id: req.body._id }, req.body, (error, palette) => {
      if (error) res.status(400).json( { error: error, body: req.body })
      res.status(200).json({ success: true, message: "Palette successfuly updated", object: palette })
    })
  }
}

api.remove = (Palette, Token) => (req, res) => {
  if (!Token) {
    console.log(error)
    return res.status(403).send({ success: false, message: 'Unauthorized' })
  } else {
    Palette.deleteOne({ _id: req.query._id }, (error, removed) => {
      console.log(error)
      if (error) res.status(400).json(error)
      res.status(200).json({ success: true, message: 'Palette removed' })
    })
  }
}

module.exports = api
