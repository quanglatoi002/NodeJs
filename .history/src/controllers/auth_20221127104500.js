import * as services from "../services";

export const register = async (req, res) => {
    try {
        const response = services.register();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            mes: "Iternal Server Error",
        });
    }
};
