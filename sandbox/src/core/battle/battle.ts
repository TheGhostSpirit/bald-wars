import { MyCharacter } from 'character-lib';

import { Character } from './character';
import { Game } from './game';

import { logger } from '../../utils/logger';

export const battle = (character1: MyCharacter, character2: MyCharacter) => {
  const char1 = Character.fromMyCharacter(character1, 0, 0);
  const char2 = Character.fromMyCharacter(character2, 9, 9);

  const game = new Game([ char1, char2 ]);

  while(!game.isFinished) {
    const action = game.turn.turn(game, game.turn);
    game.doMove(action);
  }

  logger.log(game.actions);
  return game.actions;
};
