import { Collection, MongoClient } from "mongodb";

export const MongoHelper = {
  client: MongoClient,

  async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },

  async disconnect(): Promise<void> {
    this.client.close()
  },

  getCollection(name: string): Collection {
    return this.client.db().collection(name)
  }
}