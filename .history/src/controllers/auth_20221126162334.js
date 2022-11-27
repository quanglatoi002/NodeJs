import { register } from "../services";

export const register = (req, res) => {
    try {
    } catch (error) {
        return res.status(500).json({
            err: -1,
            mes: "Iternal Server Error",
        });
    }
};
