// KẾT QUẢ TRẢ VỀ TỪ ROUTERS SẼ ĐƯỢC HIỂU THỊ TRÊN TRÌNH DUYỆT
import user from "./user";
import auth from "./auth";
import { notFound } from "../middlewares/handle_errors";

const initRouter = (app) => {
    app.use("/api/v1/user", user);
    app.use("/api/v1/auth", auth);

    app.use(notFound);
};

module.exports = initRouter;
