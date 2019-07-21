describe('Initial', () => {
	describe('Call API root', () => {
	  it('should return API welcome message', (done) => {
			chai.request(server)
		    .get('/')
		    .end((err, res) => {
			  	res.should.have.status(200)
			  	res.text.should.be.eql('API is running')
		      done()
				})
	  })
  })
})
