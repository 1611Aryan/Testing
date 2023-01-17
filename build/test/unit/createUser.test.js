import { should } from "chai";
import { describe } from "mocha";
import proxyquire from "proxyquire";
import Sinon from "sinon";
import data from "./mock.js";
describe("Actual User Test", function () {
    should();
    const fetchStub = Sinon.stub();
    fetchStub.resolves(data);
    const getUserProxy = proxyquire("/../../User/createUser.js", {
        "node-fetch": fetchStub,
    });
    it("results recieved", async function () {
        const res = await getUserProxy();
        console.log(res);
        res.should.have.property("results");
        res.results[0].should.have.property("name");
    });
});
