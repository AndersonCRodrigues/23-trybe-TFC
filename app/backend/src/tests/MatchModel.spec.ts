import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';
const { expect } = chai;
import MatchService from '../services/Match.service';
import { allMatches, createMatch, matchLeaderBoard, oneMatch, returnCreatedMatch } from './mock/matches.mock';
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
  describe('PATCH /matches/:id/finish', () => {
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
  describe('PATCH /mathces/:id', () => {
    it('Deve retornar status 200 após alterar o match', async () => {
      Sinon.stub(jwt, 'verifyToken').returns({id: 1});
      Sinon.stub(MatchService, 'update').resolves();

      chaiHttpResponse = await chai.request(app)
      .patch('/matches/1')
      .set('Authorization', 'token-valid');

      expect(chaiHttpResponse.status).to.be.equal(200);
    })
  });
  describe('POST /matches', () => {
    it('Deve retonar um objeto com a match criada', async () => {
      Sinon.stub(jwt, 'verifyToken').returns({id: 1});
      Sinon.stub(MatchService, 'create').resolves(returnCreatedMatch);

      chaiHttpResponse = await chai.request(app)
        .post('/matches')
        .send(createMatch)
        .set('Authorization', 'token-valid');

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(returnCreatedMatch);
    })
  });
  describe('GET /leaderboard', () => {
    it('Deve devolver um array de Boar', async () => {
      Sinon.stub(MatchService, 'leaderBoard').resolves(matchLeaderBoard);

      chaiHttpResponse = await chai.request(app)
        .get('/leaderboard');

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(matchLeaderBoard);
    });
  });
});