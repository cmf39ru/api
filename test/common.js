//During the test the env variable is set to test
process.env.NODE_ENV = 'test'

//Require the dev-dependencies
global.chai = require('chai')
let chaiHttp = require('chai-http')
global.server = require('../server')
chai.should()

chai.use(chaiHttp)

global.token = ''
global.uid = ''
