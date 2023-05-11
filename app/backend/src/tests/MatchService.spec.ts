import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
const { expect } = chai;
// @ts-ignore
import chaiAsPromised = require('chai-as-promised');
import MatchModel from '../database/models/Match.models';
import MatchService from '../services/Match.service';
import { allMatches, changedCreatedMatch, createMatch, matchLeaderBoard, matchUpdate, returnCreatedMatch } from './mock/matches.mock';
import TeamService from '../services/Team.service';
import * as Board from '../utils/leaderBoard';

chai.use(chaiHttp);
chai.use(chaiAsPromised);

describe('Match Service', () => {

  afterEach(() => {
    Sinon.restore();

  });

  describe('getAll', () => {
    it('Deve retornar array de matches', async () => {
      // @ts-ignore
      Sinon.stub(MatchModel, 'findAll').resolves(allMatches);

      expect(await MatchService.getAll(undefined))
      .to.be.equal(allMatches);
    });
  });
  describe('finishMatch', () => {
    it('Deve mudar o inProgress de um match', async () => {
      // @ts-ignore
      Sinon.stub(MatchModel, 'findByPk').resolves({save: () => {}, inProgress: true});

      expect(await MatchService.finishMatch(1)).to.haveOwnProperty('inProgress', false);
      expect(await MatchService.finishMatch(1)).to.haveOwnProperty('save');
    });
  });
  describe('create', () => {
    it('Deve mudar retornar um match criado', async () => {
      const data = {
        homeTeamGoals: 3,
        awayTeamGoals: 1
      };
      // @ts-ignore
      Sinon.stub(MatchModel, 'create').resolves(returnCreatedMatch);
      // @ts-ignore
      Sinon.stub(TeamService, 'getOne').resolves({})

      expect(await MatchService.create(createMatch)).to.be.deep.equal(returnCreatedMatch);
    });
  });
  describe('update', () => {
    it('Deve mudar retornar um match alterado', async () => {
      const data = {
        homeTeamGoals: 3,
        awayTeamGoals: 1
      };
      // @ts-ignore
      Sinon.stub(MatchModel, 'findByPk').resolves({...returnCreatedMatch, save: () => {}});

      expect(await MatchService.update(1, data))
        .to.be.haveOwnProperty( 'homeTeamGoals', 3);
        expect(await MatchService.update(1, data))
        .to.be.haveOwnProperty( 'awayTeamGoals', 1);
    });
  });
  describe('leaderBoard', () => {
    it('Deve retornar um array de Board', async () => {
      Sinon.stub(TeamService, 'getAll').resolves([]);
      Sinon.stub(MatchService, 'getAll').resolves([]);
      Sinon.stub(Board, 'createLeaderBoard').returns(matchLeaderBoard);

      expect(await MatchService.leaderBoard('home')).to.be.deep.equal(matchLeaderBoard);
    });
  });
});