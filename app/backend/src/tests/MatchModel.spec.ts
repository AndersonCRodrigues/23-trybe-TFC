import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';
const { expect } = chai;
import MatchService from '../services/Match.service';
import { allMatches, oneMatch } from './mock/matches.mock';
import * as jwt from '../utils/auth';


chai.use(chaiHttp);

describe('Matches Router', () => {

  let chaiHttpResponse: Response;

  afterEach(() => {
    Sinon.restore();
  });

  describe('GET /matches', () => {
    it('Deve retornar uma lista de todas as matches', async () => {
      Sinon.stub(MatchService, 'getAll').resolves(allMatches);

      chaiHttpResponse = await chai.request(app).get('/matches');

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(allMatches);
    });
  });
  describe('Patch /matches/:id/finish', () => {
    it('Deve retornar Finished', async () => {
      Sinon.stub(jwt, 'verifyToken').returns({id: 1});
      Sinon.stub(MatchService, 'finishMatch').resolves();

      chaiHttpResponse = await chai.request(app)
        .patch('/matches/1/finish')
        .set('Authorization', 'token-valid');;

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Finished' });
    });
  });
});