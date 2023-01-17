import { faker } from "@faker-js/faker";
const createUserMock = async () => {
    const name = faker.name.fullName(), gender = faker.name.sexType(), _id = faker.datatype.uuid(), phone = faker.phone.number(), email = faker.internet.email();
    await new Promise(r => setTimeout(r, 2000));
    console.log("Created");
    return {
        name,
        gender,
        _id,
        phone,
        email,
    };
};
export default createUserMock;
