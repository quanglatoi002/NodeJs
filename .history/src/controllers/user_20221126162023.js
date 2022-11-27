import { register } from "../services";

const getUsers = (req, res) => {
    return res.send("user controller");
};

module.exports = {
    getUsers,
};
