const mongoose = require('mongoose')

const api = {}

api.store = (Front, Token) => (req, res) => {
  if (!Token) {
    return res.status(403).send({ success: false, message: 'Unauthorized' })
  } else {
    const front = new Front({
      name: req.body.name,
      madeof: req.body.madeof,
      innerwidth: req.body.innerwidth,
      backcolor: req.body.backcolor
    })

    front.save(error => {
      if (error) return res.status(400).json(error)
      res.status(200).json({ success: true, message: "Front successfuly stored", object: front })
    })
  }
}

api.getAll = (Front, Token) => (req, res) => {
  if (!Token) {
    return res.status(403).send({ success: false, message: 'Unauthorized' })
  } else {
    Front.find().sort({name: 1}).exec((error, fronts) => {
      if (error) res.status(400).json(error)
      res.status(200).json(fronts)
    })
  }
}

api.getAllpublic = (Front) => (req, res) => {
  Front.find().sort({name: 1}).exec((error, fronts) => {
    if (error) res.status(400).json(error)
    res.status(200).json(fronts)
  })
}

api.getAllPublic = (Front) => (req, res) => {
  Front.find().sort({name: 1}).exec((error, fronts) => {
    if (error) res.status(400).json(error)
    res.status(200).json(fronts)
  })
}

api.getOne = (Front, Token) => (req, res) => {
  console.log(req.query)
  if (!Token) {
    return res.status(403).send({ success: false, message: 'Unauthorized' })
  } else {
    Front.findOne({ _id: req.query._id }, (error, front) => {
      if (error) res.status(400).json(error)
      res.status(200).json(front)
    })
  }
}

api.getOnePublic = (Front) => (req, res) => {
  Front.findOne({ _id: req.query._id }, (error, front) => {
    if (error) res.status(400).json(error)
    res.status(200).json(front)
  })
}

api.edit = (Front, Token) => (req, res) => {
  if (!Token) {
    return res.status(403).send({ success: false, message: 'Unauthorized' })
  } else {
    // console.log(req.body);
    Front.findOneAndUpdate({ _id: req.body._id }, req.body, (error, front) => {
      if (error) res.status(400).json( { error: error, body: req.body })
      res.status(200).json({ success: true, message: "Front successfuly updated", object: front })
    })
  }
}

api.remove = (Front, Token) => (req, res) => {
  if (!Token) {
    return res.status(403).send({ success: false, message: 'Unauthorized' })
  } else {
    Front.deleteOne({ _id: req.query._id }, (error, removed) => {
      if (error) res.status(400).json(error)
      res.status(200).json({ success: true, message: 'Front removed' })
    })
  }
}

module.exports = api
