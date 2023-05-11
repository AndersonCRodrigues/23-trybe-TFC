import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';
const { expect } = chai;
import TeamService from '../services/Team.service';
import { allTeams, oneTeam } from './mock/teams.mock';


chai.use(chaiHttp);

describe('Teams Router', () => {

  let chaiHttpResponse: Response;

  afterEach(() => {
    Sinon.restore();
  });

  describe('GET /teams', () => {
    it('Deve retornar uma lista de todos os teams', async () => {
      Sinon.stub(TeamService, 'getAll').resolves(allTeams);

      chaiHttpResponse = await chai.request(app).get('/teams');

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(allTeams);
    })

    it('Deve retornar um teams', async () => {
      Sinon.stub(TeamService, 'getOne').resolves(oneTeam);

      chaiHttpResponse = await chai.request(app).get('/teams/1');

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(oneTeam);
    })
  })
})