export interface Character {
  name: string;
  visibility: 'private' | 'public';
  battles: {
    participated: number;
    won: number;
    lost: number;
  };
  program: string;
}
