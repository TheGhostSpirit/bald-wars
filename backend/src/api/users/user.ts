export interface User {
  displayName: string;
  email: string;
  elo: number;
  battles: {
    participated: number;
    won: number;
    lost: number;
  };
}

export const defaultUser = (): User => {
  return {
    displayName: '',
    email: '',
    elo: 1400,
    battles: {
      participated: 0,
      won: 0,
      lost: 0,
    },
  };
};
