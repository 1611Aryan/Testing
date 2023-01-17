import fetch from "node-fetch"
const ENDPOINT = "https://api.randomuser.me/"

export type User = {
  results: any[]
}

const getUser = async () => {
  try {
    const res = await fetch(ENDPOINT)
    const data = (await res.json()) as User

    return data
  } catch (err) {
    throw err
  }
}

export default getUser
