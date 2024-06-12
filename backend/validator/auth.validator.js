const { z } = require("zod");

const signupSchema = z.object({
  name: z
    .string({ required_error: "Name is required field" })
    .trim()
    .min(3, { message: "Name must be at-least 3 characters." })
    .max(30, { message: "Name must be at-least 30 characters." }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be at least 5 characters" })
    .max(125, { message: "Email must not be more than 125 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(125, { message: "Password must not be more than 125 characters." }),
});

const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be at least 5 characters" })
    .max(125, { message: "Email must not be more than 125 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(125, { message: "Password must not be more than 125 characters." }),
});

module.exports = {
  signupSchema,
  signInSchema,
};
