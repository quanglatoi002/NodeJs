import createHttpError from "http-errors";
export const badRequest = (err, res) => {
    const error = createHttpError.BadRequest(err);
    return res.status(error.status).json({
        err: 1,
        mes: error.message,
    });
};

export const internalServerError = (res) => {
    const error = createHttpError.InternalServerError();
    return res.status(error.status).json({
        err: 1,
        mes: error.message,
    });
};

export const notFound = (req, res) => {
    const error = createHttpError.NotFound("This route is not defined");
    return res.status(error.status).json({
        err: 1,
        mes: error.message,
    });
};
