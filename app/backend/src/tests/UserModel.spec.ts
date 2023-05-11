import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';
const { expect } = chai;
import * as chaiAsPromised from 'chai-as-promised';
import UserService from '../services/User.service';
import * as jwt from '../utils/auth';



chai.use(chaiHttp);
chai.use(chaiAsPromised);

describe('Login Router', () => {

  let chaiHttpResponse: Response;

  afterEach(() => {
    Sinon.restore();
  });

  describe('POST /login', () => {
    it('Deve retornar um token passando parametros corretos', async () => {
      Sinon.stub(UserService, 'login').resolves('token');

      chaiHttpResponse = await chai.request(app)
        .post('/login')
        .send({
          email: 'email@email.com',
          password: '123456',
        });

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal({token: 'token'});
    })

    it('Deve retornar status 400 com parametros faltando', async () => {
      chaiHttpResponse = await chai.request(app)
        .post('/login')
        .send({
          password: '123456',
        });

      expect(chaiHttpResponse.status).to.be.equal(400);
    })

    it('Deve retornar status 401 com parametros incorreto', async () => {
      chaiHttpResponse = await chai.request(app)
        .post('/login')
        .send({
          email: 'email@email.com',
          password: '12345',
        });

      expect(chaiHttpResponse.status).to.be.equal(401);
    })
  
  });
  describe('GET /login/role', () => {
    it('Deve retornar um objeto com a role do usuário', async () => {
      Sinon.stub(jwt, 'verifyToken').returns({id: 1});
      Sinon.stub(UserService, 'getRole').resolves('admin');

      chaiHttpResponse = await chai.request(app)
        .get('/login/role')
        .set('Authorization', 'token-valid');

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal({role: 'admin'});
    });

    it('Deve retornar status 401 sem passar o token', async () => {
      Sinon.stub(jwt, 'verifyToken').returns({id: 1});
      Sinon.stub(UserService, 'getRole').resolves('admin');

      chaiHttpResponse = await chai.request(app)
        .get('/login/role');

      expect(chaiHttpResponse.status).to.be.equal(401);
    });

    it('Deve retornar status 401 ao passar o token inválido', async () => {
      Sinon.stub(UserService, 'getRole').resolves('admin');

      chaiHttpResponse = await chai.request(app)
        .get('/login/role')
        .set('Authorization', 'token-invalid');

      expect(chaiHttpResponse.status).to.be.equal(401);
    });
  });
})