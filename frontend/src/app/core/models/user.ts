export interface User {
  displayName: string;
  email: string;
  elo: number;
  battles: unknown[];
  characters: unknown[];
}

export interface UserRanking {
  displayName: string;
  email: string;
  elo: number;
  battles: {
    won: number;
    lost: number;
    fought: number;
  };
}
