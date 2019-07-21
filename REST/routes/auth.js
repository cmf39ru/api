const models = require('@REST/setup')

module.exports = (app) => {
  const api = app.app.REST.controllers.auth
  // console.log(app.app)
  app.route('/')
   .get((req, res) => res.send('API is running'))
  app.route('/app/auth')
   .post(api.login(models.User))
}
