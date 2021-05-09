import MongoLib from '../../../lib/mongo'

class MongoPersonRepository {
  constructor () {
    this.collection = 'agenda'
    this.mongoDB = new MongoLib()
  }

  async add (person) {
    const id = await this.mongoDB.create(this.collection, person)
    return { id, ...person }
  }

  async delete (id) {
    const idx = await this.mongoDB.delete(this.collection, id)
    return { idx }
  }

  async get (id) {
    const person = await this.mongoDB.get(this.collection, id)
    return { person }
  }

  async getAll () {
    const persons = await this.mongoDB.getAll(this.collection)
    return { persons }
  }
}

export default MongoPersonRepository
