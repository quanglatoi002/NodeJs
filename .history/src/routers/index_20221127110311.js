// KẾT QUẢ TRẢ VỀ TỪ ROUTERS SẼ ĐƯỢC HIỂU THỊ TRÊN TRÌNH DUYỆT
import user from "./user";
import auth from "./auth";

const initRouter = (app) => {
    app.use("/api/v1/user", user);
    app.use("/api/v1/auth", auth);

    return app.use("/", (req, res) => {
        res.send("server on...");
    });
};

const initRouters = (app) => {
    return app.use("/", (req, res) => {
        res.send("server on ...");
    });
};

module.exports = initRouter;
