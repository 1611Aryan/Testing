const validateEmail = async (user) => {
    const a = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(user.email);
    await new Promise(r => setTimeout(r, 2000));
    return a;
};
export default validateEmail;
