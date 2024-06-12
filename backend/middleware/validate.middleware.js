const { StatusCodes } = require("http-status-codes");

const validate = (schema) => {
    return async(req, res, next) => {
        try{
            const parseBody = await schema.parseAsync(req.body);
            req.body = parseBody;
            next();
        }catch(error){
            console.log(error)
            res.status(StatusCodes.BAD_REQUEST).json({
                message: error,
                status: StatusCodes.BAD_REQUEST
            })
        }
    }
}

module.exports = validate