import * as services from "../services";

export const register = async (req, res) => {
    try {
        const response = await services.register();
        return res.status(200);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            mes: "Iternal Server Error",
        });
    }
};
