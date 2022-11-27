import user from "./user";
import auth from "./auth";
const user = require("./user");

const initRouter = (app) => {
    app.use("/api/v1/user", user);
    app.use("/api/v1/auth", auth);

    return app.use("/", (req, res) => {
        res.send("server on...");
    });
};
module.exports = initRouter;
