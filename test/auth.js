describe('User/Auth related', () => {
 /*
  * Test user/auth related routes providing valid input data
	*
	* ALL routes except /, /app/setup, /app/login are JWT protected
	* therefor perform auth test first and save token for the rest 
  */
	describe('Create init admin account', () => {
	  it('should return success message', (done) => {
			chai.request(server)
		    .post('/app/setup')
		    .end((err, res) => {
			  	res.should.have.status(200)
			  	res.body.message.should.be.eql('Admin account created')
					res.body.should.have.property('success')
					res.body.success.should.be.equal(true)
		      done()
				})
	  })
  })

	describe('User login', () => {
    it('should return 200 and token for valid credentials', (done) => {
      const valid_input = {
        "username": "admin",
        "password": "admin"
      }
      chai.request(server)
				.post('/app/auth')
        .send(valid_input)
        .end((err, res) => {
          res.should.have.status(200)
					res.body.message.should.be.eql('Token granted')
          res.body.should.have.property('token')
					res.body.should.have.property('user')
          res.body.should.have.not.property('error')
					token = res.body.token
					uid = res.body.user._id
          done()
        })
    })
  })

	describe('Get user list', () => {
	  it('should return user list with 1 user', (done) => {
			chai.request(server)
		    .get('/app/users')
				.set('Content-Type', 'application/x-www-form-urlencoded')
				.set('Authorization', 'Bearer ' + token)
				.send({ user_id: uid })
		    .end((err, res) => {
			  	res.should.have.status(200)
					res.body.should.have.property('users')
					res.body.users.length.should.be.eql(1)
		      done()
				})
	  })
  })
 /*
  * Here to be more tests providing fake input data
	* like wrong credentials, expired token, malformed token
  */
})
