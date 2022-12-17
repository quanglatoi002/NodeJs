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
// err 401
// trả về 2 là token hết hạn
export const notAuth = (err, res, isExpired) => {
    const error = createHttpError.Unauthorized(err);
    return res.status(error.status).json({
        err: isExpired ? 2 : 1,
        mes: error.message,
    });
};
