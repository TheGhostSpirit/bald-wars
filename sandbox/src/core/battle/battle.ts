import { MyCharacter } from 'character-lib';

import { Character } from './character';
import { Game } from './game';

export const battle = (
  character1: [number, string, MyCharacter],
  character2: [number, string, MyCharacter]
) => {
  const char1 = Character.fromMyCharacter(
    character1[2],
    0,
    0,
    character1[0],
    character1[1]
  );
  const char2 = Character.fromMyCharacter(
    character2[2],
    9,
    9,
    character2[0],
    character2[1]
  );

  const game = new Game([ char1, char2 ]);

  while (!game.isFinished) {
    const action = game.turn.turn(game, game.turn);
    game.doMove(action);
  }

  return game.actions;
};
