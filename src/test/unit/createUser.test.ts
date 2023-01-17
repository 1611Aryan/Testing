import { should } from "chai"
import { describe } from "mocha"
import createUser from "../../User/createUser.js"
import validateEmail from "../../User/validateEmail.js"

should()

describe("Generate a new User", function () {
  this.timeout(4500)
  it("Name should exist", async function () {
    const user = await createUser()
    user.name = ""
    user.should.have.property("name")
    user.name.should.not.be.empty
  })
  it("Valid Email", async function () {
    const user = await createUser()
    const validEmail = await validateEmail(user)
    validEmail.should.be.true
  })
})
