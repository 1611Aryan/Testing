import { should } from "chai";
import { describe } from "mocha";
import createUser from "../../User/createUser.js";
describe("Generate a new User", function () {
    should();
    this.timeout(2500);
    it("Name should exist", async function () {
        const user = await createUser();
        user.should.have.property("name");
    });
    it("Valid Email", async function () {
        const user = await createUser();
        user.should.have
            .property("email")
            .match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, "Not an email");
    });
});
//# sourceMappingURL=createUser.test.js.map