const User = require("../model/user.model");
const { StatusCodes } = require("http-status-codes");
const generateAuthToken = require("../utils/authToken.util");

const createUser = async (request, response) => {
  try {
    if (await User.isEmailTaken(request.body.email)) {
      throw new Error("Email already taken.");
    }
    const user = await User.create(request.body);
    const jwtToken = await generateAuthToken(user);
    response.status(StatusCodes.CREATED).json({ user, jwtToken });
  } catch (error) {
    return response.status(StatusCodes.NOT_ACCEPTABLE).json({
      message: error.message,
      statusCode: StatusCodes.NOT_ACCEPTABLE,
    });
  }
};

const signIn = async (request, response) => {
    try {
      const user = await User.findOne({email: request.body.email});
      if(!user) {
        throw new Error("Email is not correct.")
      }
      const isPasswordMatch = await user.comparePassword(request.body.password);
      if(!isPasswordMatch){
        throw new Error("Password is not correct.")
      }
      const jwtToken = await generateAuthToken(user);
      response.status(StatusCodes.ACCEPTED).json({ user, jwtToken });
    } catch (error) {
      return response.status(StatusCodes.NOT_ACCEPTABLE).json({
        message: error.message,
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }
  };

// const login = async(req)

module.exports = {
  createUser,
  signIn
};
