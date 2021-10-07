import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '../user';

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
