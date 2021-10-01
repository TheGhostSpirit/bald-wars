export interface User {
  displayName: string;
  email: string;
  elo: number;
  ranking: number;
  battles: {
    won: number;
    lost: number;
    fought: number;
  };
}
