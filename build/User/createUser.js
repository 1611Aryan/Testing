import fetch from "node-fetch";
const ENDPOINT = "https://api.randomuser.me/";
const getUser = async () => {
    try {
        const res = await fetch(ENDPOINT);
        const data = (await res.json());
        return data;
    }
    catch (err) {
        throw err;
    }
};
export default getUser;
