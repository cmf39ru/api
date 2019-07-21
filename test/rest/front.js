//
// //Our parent block
// describe('User/Auth related', () => {
// 	before((done) => {
// 		Palette.remove({}, (err) => {
// 		   done()
// 		})
// 	})
// 	// after(() => request.server.close())
//  /*
//   * Test the /GET route
//   */
//
// 	describe('User login', () => {
//     it('should return 200 and token for valid credentials', (done) => {
//       //mock invalid user input
//       const valid_input = {
//         "username": "admin",
//         "password": "admin"
//       }
//       //send request to the app
//       chai.request(server)
// 				.post('/app/auth')
//         .send(valid_input)
//         .end((err, res) => {
//           res.should.have.status(200)
// 					res.body.message.should.be.eql('Token granted')
//           res.body.should.have.property('token')
// 					res.body.should.have.property('user')
//           res.body.should.have.not.property('error')
// 					token = res.body.token
// 					uid = res.body.user._id
//           done()
//         })
//     })
//   })
//
// 	describe('Get user list', () => {
// 	  it('should return user list with 1 user', (done) => {
// 			chai.request(server)
// 		    .get('/app/users')
// 				.set('Content-Type', 'application/x-www-form-urlencoded')
// 				.set('authorization', 'Bearer ' + token)
// 				.send({ user_id: uid })
// 		    .end((err, res) => {
// 			  	res.should.have.status(200)
// 					res.body.should.have.property('users')
// 					res.body.users.length.should.be.eql(1)
// 		      done()
// 				})
// 	  })
//   })
//
//
//  /*
//   * Test the /POST route
//   */
//   // describe('/POST palette', () => {
// 	//   it('it should not POST a palette without any props', (done) => {
// 	//   	let palette = {
// 	//   		name: "Just colors",
// 	//   		noflat: false
// 	//   	}
// 	// 		chai.request(server)
// 	// 	    .post('/app/palette')
// 	// 	    .send(palette)
// 	// 	    .end((err, res) => {
// 	// 		  	res.should.have.status(200)
// 	// 		  	res.body.should.be.a('object')
// 	// 		  	res.body.should.have.property('message').eql('Palette successfuly stored')
// 	// 		  	res.body.object.should.have.property('name')
// 	// 		  	res.body.object.should.have.property('noflat')
// 	// 	      done()
// 	// 	    })
// 	//   })
//   // })
//  /*
//   * Test the /GET/:id route
//   */
//  //  describe('/GET/:id book', () => {
// 	//   it('it should GET a book by the given id', (done) => {
// 	//   	let book = new Book({ title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, pages: 1170 })
// 	//   	book.save((err, book) => {
// 	//   		chai.request(server)
// 	// 	    .get('/book/' + book.id)
// 	// 	    .send(book)
// 	// 	    .end((err, res) => {
// 	// 		  	res.should.have.status(200)
// 	// 		  	res.body.should.be.a('object')
// 	// 		  	res.body.should.have.property('title')
// 	// 		  	res.body.should.have.property('author')
// 	// 		  	res.body.should.have.property('pages')
// 	// 		  	res.body.should.have.property('year')
// 	// 		  	res.body.should.have.property('_id').eql(book.id)
// 	// 	      done()
// 	// 	    })
// 	//   	})
//  //
// 	//   })
//  //  })
//  // /*
//  //  * Test the /PUT/:id route
//  //  */
//  //  describe('/PUT/:id book', () => {
// 	//   it('it should UPDATE a book given the id', (done) => {
// 	//   	let book = new Book({title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1948, pages: 778})
// 	//   	book.save((err, book) => {
// 	// 			chai.request(server)
// 	// 		    .put('/book/' + book.id)
// 	// 		    .send({title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1950, pages: 778})
// 	// 		    .end((err, res) => {
// 	// 			  	res.should.have.status(200)
// 	// 			  	res.body.should.be.a('object')
// 	// 			  	res.body.should.have.property('message').eql('Book updated!')
// 	// 			  	res.body.book.should.have.property('year').eql(1950)
// 	// 		      done()
// 	// 		    })
// 	// 	  })
// 	//   })
//  //  })
//  // /*
//  //  * Test the /DELETE/:id route
//  //  */
//  //  describe('/DELETE/:id book', () => {
// 	//   it('it should DELETE a book given the id', (done) => {
// 	//   	let book = new Book({title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1948, pages: 778})
// 	//   	book.save((err, book) => {
// 	// 			chai.request(server)
// 	// 		    .delete('/book/' + book.id)
// 	// 		    .end((err, res) => {
// 	// 			  	res.should.have.status(200)
// 	// 			  	res.body.should.be.a('object')
// 	// 			  	res.body.should.have.property('message').eql('Book successfully deleted!')
// 	// 			  	res.body.result.should.have.property('ok').eql(1)
// 	// 			  	res.body.result.should.have.property('n').eql(1)
// 	// 		      done()
// 	// 		    })
// 	// 	  })
// 	//   })
//  //  })
// })
