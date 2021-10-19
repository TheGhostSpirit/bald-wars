export interface Opponent {
  id: number;
  name: number;
  user: {
    email: string;
    displayName: string;
    elo: number;
  }
}
