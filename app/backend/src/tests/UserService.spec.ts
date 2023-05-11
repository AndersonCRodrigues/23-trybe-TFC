import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
const { expect } = chai;
// @ts-ignore
import chaiAsPromised = require('chai-as-promised');
import UserService from '../services/User.service';
import UserModel from '../database/models/User.model';
import * as bcrypt from 'bcryptjs';
import * as jwt from '../utils/auth';

chai.use(chaiHttp);
chai.use(chaiAsPromised);

describe('Users Service', () => {

  afterEach(() => {
    Sinon.restore();
  });

  describe('login', () => {
    it('Deve retornar token', async () => {
      // @ts-ignore
      Sinon.stub(UserModel, 'findOne').resolves({ email: 'email@email.com', password: '123456'});
       // @ts-ignore
      Sinon.stub(bcrypt, 'compare').returns(true);
      Sinon.stub(jwt, 'createToken').returns('token');

      expect(await UserService.login({ email: 'email@email.com', password: '123456'}))
      .to.be.equal('token');
    });

    it('Deve retornar error quando não existe usuário', async () => {
      // @ts-ignore
      Sinon.stub(UserModel, 'findOne').resolves(undefined);

      expect(UserService.login({ email: 'email@email.com', password: '123456'}))
      .to.eventually.be.rejectedWith('Invalid email or password');
    });

    it('Deve retornar error quando a senha é incorreta', async () => {
      // @ts-ignore
      Sinon.stub(UserModel, 'findOne').resolves({ email: 'email@email.com', password: '654321'});
       // @ts-ignore
      Sinon.stub(bcrypt, 'compare').returns(false);

      expect(UserService.login({ email: 'email@email.com', password: '123456'}))
      .to.eventually.be.rejectedWith('Invalid email or password');
    });
  });
  describe('getRole', () => {
    it('Deve retorn o role do usuário', async () => {
      Sinon.stub(jwt, 'decodeToken').returns({id: 1});
      // @ts-ignore
      Sinon.stub(UserModel, 'findByPk').resolves({role: 'admin'});

      expect(await UserService.getRole('token'))
      .to.be.equal('admin');
    });
    it('Deve retorn erro quando o token é inválido', async () => {
      Sinon.stub(jwt, 'decodeToken').returns({id: 1});
      // @ts-ignore
      Sinon.stub(UserModel, 'findByPk').resolves(undefined);

      expect(UserService.getRole('token'))
      .to.eventually.be.rejectedWith('Token must be a valid token');
    });
  });
});