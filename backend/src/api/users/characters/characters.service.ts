import { Repository } from 'typeorm';

import { PCharacter } from './character';

const list = async (
  repository: Repository<PCharacter>
): Promise<PCharacter[]> => {
  return repository.find();
};

const findOne = async (
  repository: Repository<PCharacter>,
  id: number
): Promise<PCharacter | undefined> => {
  return repository.findOne(id);
};

export default { list, findOne };
