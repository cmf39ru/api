const passport = require('passport'),
      config = require('@config'),
      models = require('@REST/setup')

module.exports = (app) => {
  const api = app.app.REST.controllers.user

  // app.route('/app/signup')
  //   .post(api.signup(models.User))
  app.route('/app/setup')
    .post(api.setup(models.User))
  app.route('/app/users')
    .get(passport.authenticate('jwt', config.session),  api.index(models.User, app.get('mysecretword')))
  app.route('/app/user')
    .get(passport.authenticate('jwt', config.session),  api.info(models.User, app.get('mysecretword')))
}
