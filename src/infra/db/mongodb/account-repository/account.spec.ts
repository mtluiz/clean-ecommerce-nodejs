import { MongoHelper } from "../helpers/mongodb-helper";
import AccountMongoRepository from "./account"

describe("Account Mongo Repository", () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test("Should return an account successfully", async () => {
    const sut = new AccountMongoRepository()
    const account = await sut.add({
      name: "any_name",
      email: "any_email@mail.com",
      password: "any_password"
    })
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe("any_name")
    expect(account.email).toBe("any_email@mail.com")
    expect(account.password).toBe("any_password")
  })
})