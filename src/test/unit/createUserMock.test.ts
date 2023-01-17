import { should } from "chai"
import { describe } from "mocha"
import createUserMock from "../../User/createUserMock.js"
import validateEmail from "../../User/validateEmail.js"

describe("Generate a new User", async function () {
  this.timeout(4500)
  should()

  it("Name should exist", async function () {
    const user = await createUserMock()
    user.should.have.property("name")
    user.name.should.not.be.empty
  })
  it("Valid Email", async function () {
    const user = await createUserMock()
    const validEmail = await validateEmail(user)
    validEmail.should.be.true
  })
})
