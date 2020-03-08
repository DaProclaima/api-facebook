/* eslint-env node, mocha */
const chai = require('chai')
const chaiHttp = require('chai-http')
const Server = require('../app/server')

const server = new Server()
server.run()
const should = chai.should()
const app = server.app
chai.use(chaiHttp)

describe('Server', () => {
  it('should get a message error with bad url in 404', (done) => {
    const result = '{"code":404,"message":"Not Found"}'

    chai
      .request(app)
      .get('/notexist/notexist')
      .end((err, res) => {
        res.should.have.status(404)

        const response = JSON.parse(JSON.stringify(res.body))

        JSON.stringify(response).should.be.eql(result)
        done()
    })
  })
})

describe('/users', function() {
  let userCreate
  it('users/creates status should be 404', (done) => {
    const result = '{"code":404,"message":"Not Found"}'

    chai
    .request(app)
    .post('/user/creates')
    .end((err, res) => {
      res.should.have.status(404)

      const response = JSON.stringify(res.body)
      response.should.be.eql(result)
      done()
    })
  })

  it('user/create should respond 200', (done) => {
    const arg = {
      'email': 'alexandre.HoumeauHoumeau@gmail.com',
      'password': 'azertyuiop'
    }
    const rep = {
      "email": "alexandre.HoumeauHoumeau@gmail.com",
      "password": "azertyuiop"
    }
    chai
      .request(app)
      .post('/user/create')
      .send(arg)
      .then((res) => {
        res.should.have.status(201)

        const response = res.body.userModel
        userCreate = Object.assign({},response)

        delete response.id
        delete response.token
        response.should.be.eql(rep)
        done() 
      })
      .catch((err) => {
        throw err;
      })
  })

  it('users/show should get a sepecific user by id', (done) => {
    chai
      .request(app)
      .get(`/user/show/${userCreate.id}`)
      .set('token', `${userCreate.token}`)
      .end((err, res) => {
        res.should.have.status(200)

        const response = res.body
        const newUser = userCreate

        response.should.be.eql(newUser)
        done() 
    })
  })

  it('users/delete should get a sepecific user by id', (done) => {
    chai
      .request(app)
      .delete(`/user/delete/${userCreate.id}`)
      .set('token', `${userCreate.token}`)
      .end((err, res) => {
        res.should.have.status(200)

        res.body.should.be.eql(userCreate)
        done() 
    })
  })
})
