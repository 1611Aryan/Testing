import { faker, SexType } from "@faker-js/faker"

export type IUser = {
  name: string
  gender: SexType
  _id: string
  phone: string
  email: string
}

const createUser = async (): Promise<IUser> => {
  const name = faker.name.fullName(),
    gender = faker.name.sexType(),
    _id = faker.datatype.uuid(),
    phone = faker.phone.number(),
    email = faker.internet.email()
  await new Promise(r => setTimeout(r, 2000))
  console.log("Created")

  return {
    name,
    gender,
    _id,
    phone,
    email,
  }
}

export default createUser
