import { should } from "chai";
import { describe } from "mocha";
import getUser from "../../User/createUser.js";
describe("Actual User Test", function () {
    should();
    it("results recieved", async function () {
        const res = await getUser();
        res.should.have.property("results");
        res.results[0].should.have.property("name");
    });
});
