import { ObjectId } from 'mongodb';

import { Repository } from '../../../utils';

import { Character } from './character';

const list = async (
  repository: Repository<Character>
): Promise<Character[]> => {
  return repository.findAll();
};

const findOne = async (
  repository: Repository<Character>,
  id: ObjectId
): Promise<Character | undefined> => {
  return repository.findById(id);
};

export default { list, findOne };
