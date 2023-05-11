import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../app';
const { expect } = chai;
// @ts-ignore
import chaiAsPromised = require('chai-as-promised');
import TeamService from '../services/Team.service';
import { allTeams, oneTeam } from './mock/teams.mock';
import TeamModel from '../database/models/Team.model';


chai.use(chaiHttp);
chai.use(chaiAsPromised);

describe('Teams Service', () => {

  let chaiHttpResponse: Response;

  afterEach(() => {
    Sinon.restore();
  });

  describe('getAll', () => {
    it('Deve retornar uma lista de todos os teams', async () => {
      Sinon.stub(TeamModel, 'findAll').resolves([]);

      expect(await TeamService.getAll()).to.be.deep.equal([]);
    })
  })
  describe('getOne', () => {
    it('Deve retornar um objeto com Team', async () => {
      // @ts-ignore
      Sinon.stub(TeamModel, 'findByPk').resolves({id: 1, teamName: 'name'});
      expect(await TeamService.getOne(1)).to.be.deep.equal({id: 1, teamName: 'name'});
    });
    // it('Deve retorn erro se não encontrar o time', async () => {
    //   Sinon.stub(TeamModel, 'findByPk').resolves();

    //   expect(await TeamService.getOne(1)).to.be.rejectedWith('There is no team with such id!');
    // })
  });
})