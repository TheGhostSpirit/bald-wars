import { Character } from './characters/character';

export interface User {
  displayName: string;
  email: string;
  elo: number;
  battles: unknown[];
  characters: Character[];
}

export const defaultUser = (): User => {
  return {
    displayName: '',
    email: '',
    elo: 1400,
    battles: [],
    characters: []
  };
};
