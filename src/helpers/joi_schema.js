import joi from "joi";

export const email = joi
    .string()
    .pattern(new RegExp("@gmail.com$"))
    .email({ minDomainSegments: 2 })
    .required(); //bắt buộc phải có, nếu ko để required thì nó sẽ hiểu là có cũng được và không có cũng được
export const password = joi
    .string()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
    .required();
