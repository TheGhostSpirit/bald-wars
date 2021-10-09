import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '../users/user';

@Entity()
export class PCharacter {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  visibility: boolean;

  @Column('text')
  program: string;

  @ManyToOne(_ => User, user => user.characters)
  user: User;

}

export interface ICharacter {
  id: number;
  name: string;
  visibility: boolean;
  program: string;
  userEmail: string;
  battlesWon: number;
  battlesFought: number;
  battlesLost: number;
}
