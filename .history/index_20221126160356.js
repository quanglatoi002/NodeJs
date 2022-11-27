//1. Tạo kho lưu trữ "git init -y"
// 2. "express": get request từ client gửi lên, "dotenv": biến môi trường, "cors": cho phép phía client truy cập server thông qua URL, "nodemon": khi thay đổi project thì mình nhấn lưu lại thì nó sẽ tự động khởi động lại con app mà không phải mất công phải npm run dev mỗi lần lưu
// npm i express dotenv cors nodemon

import cors from "cors";
import express from "express";
// const cors = require("cors");
require("dotenv").config();
import initRouters from "./src/routers";
require("./connection_db");
// tạo con app server
const app = express();
// config app
app.use(
    cors({
        // origin lấy địa chỉ URL bên phía client
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

app.use(express.json()); //sau khi đúng địa chỉ URL và các methods thì nó chuyển sang string
app.use(express.urlencoded({ extended: true })); // client gửi lên là 1 cái mảng, object thì urlencoded sẽ đọc cái mã đó luôn

initRouters(app);

const PORT = process.env.PORT || 8888;

const listener = app.listen(PORT, () => {
    console.log("Server is running on the port " + listener.address().port);
});
