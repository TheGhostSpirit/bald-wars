import { Collection, Filter, ObjectId, OptionalId, Projection } from 'mongodb';

import { objectId } from './object-id';

/**
 * A simple repository simplifying calls to underlying MongoDB driver.
 */
export class Repository<T> {

  /**
   * The underlying Mongo collection.
   */
  collection: Collection<T>;

  /**
   * Creates a new Repository instance to be used in a service.
   * @param collection the collection on which the repository should operate.
   */
  constructor(collection: Collection<T>) {
    this.collection = collection;
  }

  /**
   * Fetches elements in the collection.
   * @param filter you may specify a filter to match only specific elements in the collection.
   * @param projection you may specifiy a projection to return only specific fields of the matched documents.
   * @returns an array of the collection elements.
   */
  async find(filter: Filter<T>, projection?: Projection<T>): Promise<T[]> {
    return this.collection.find(filter, { projection }).toArray();
  }

  /**
   * Fetches all elements in the collection.
   * @returns an array of the collection elements.
   */
  async findAll(): Promise<T[]> {
    return this.collection.find().toArray();
  }

  /**
   * Fetches the element of the passed id in the collection.
   * @param id the id of the element to look for.
   * @param projection you may specifiy a projection to return only specific fields of the matched document.
   * @returns an element or undefined if it is not found.
   */
  async findById(id: ObjectId, projection?: Projection<T>): Promise<T | undefined> {
    return this.collection.findOne({ _id: id }, { projection });
  }

  /**
   * Fetches the first element matching the given filter formatted with the specified projection.
   * @param filter you may specify a filter to match only a specific element in the collection.
   * @param projection you may specifiy a projection to return only specific fields of the matched document.
   * @returns an element or undefined if is is not found.
   */
  async findOne(filter: Filter<T>, projection?: Projection<T>): Promise<T | undefined> {
    return this.collection.findOne(filter, { projection });
  }

  /**
   * Inserts one element in the collection.
   * @param entity the element to insert.
   * @returns the id of the newly inserted element.
   */
  async insertOne(entity: OptionalId<T>): Promise<{ id: ObjectId }> {
    return this.collection.insertOne(entity).then(res => ({ id: res.insertedId as ObjectId }));
  }

  /**
   * Updates one element in the collection.
   * @param filter a filter to match one element in the collection.
   * @param update the update query to apply to the desired element.
   * @returns a boolean indicating if the operation succeeded or not.
   */
  async updateOne(filter: Filter<T>, update: Partial<T>): Promise<boolean> {
    return this.collection.updateOne(filter, update).then(res => !!res.acknowledged);
  }

  /**
   * Deletes one element in the collection.
   * @param filter a filter to match one element in the collection.
   * @returns a boolean indicating if the operation succeeded or not.
   */
  async deleteOne(filter: Filter<T>): Promise<boolean> {
    return this.collection.deleteOne(filter).then(res => res.acknowledged);
  }

  /**
   * Checks ids existence against a collection.
   * @param ids a list of objectIds or their string representation.
   * @returns true if all ids exist, or false if at least one of them doesn't.
   */
  async exists(...ids: (ObjectId | string)[]): Promise<boolean> {
    const objectIds = ids.map(id => objectId(id) as ObjectId);

    const result = await Promise.all(
      objectIds.map(
        async (id) => this.findById(id)
      )
    );

    return !result.some(r => !r);
  }

  /**
   * A powerful aggregation pipeline for more advanced cases.
   * @param pipeline a list of MongoDB operations.
   * @returns the result of the pipeline operations.
   */
  async aggregate(pipeline: Document[]): Promise<T[]> {
    return this.collection.aggregate(pipeline).toArray();
  }

}
