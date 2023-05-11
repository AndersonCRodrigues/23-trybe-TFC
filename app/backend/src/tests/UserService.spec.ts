import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
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
  });
  describe('getRole', () => {
    it('Deve retorn o role do usuário', async () => {
      Sinon.stub(jwt, 'decodeToken').returns({id: 1});
      // @ts-ignore
      Sinon.stub(UserModel, 'findByPk').resolves({role: 'admin'});

      expect(await UserService.getRole('token'))
      .to.be.equal('admin');
    });
  });
});