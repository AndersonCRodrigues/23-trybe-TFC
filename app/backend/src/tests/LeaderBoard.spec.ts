import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
const { expect } = chai;
import * as board from '../utils/leaderBoard';
import {allMatchesTrue, allTeamsBoard, dataAway, dataHome} from './mock/createLeaderBoard.mock';

describe('CreateLeaderBoard', () => {

  afterEach(() => {
    Sinon.restore();
  });
  it('Deve retornar lista com Board para Home', () => {
    Sinon.stub(board, 'LeaderBoard').returns(dataHome);

    expect(board.createLeaderBoard(allTeamsBoard, allMatchesTrue, 'home'))
      .to.be.deep.equal(dataHome)
  });
  it('Deve retornar lista com Board para Away', () => {
    Sinon.stub(board, 'LeaderBoard').returns(dataAway);

    expect(board.createLeaderBoard(allTeamsBoard, allMatchesTrue, 'away'))
      .to.be.deep.equal(dataAway)
  });
});