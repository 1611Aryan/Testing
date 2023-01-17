import assert from "assert"
import { describe } from "mocha"
import createUser from "../../User/createUser.js"

describe("Generate a new User", function () {
  // const user = {
  //   name: null,
  //   email: "1245",
  // }
  this.timeout(2500)
  it("Name should exist", async function () {
    const user = await createUser()
    assert.ok(user.name, "Name property doesn't exists")
  })
  it("Valid Email", async function () {
    const user = await createUser()
    assert.match(
      user.email,
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      "Not an email"
    )
  })
})
