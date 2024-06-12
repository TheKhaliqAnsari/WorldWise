const router = require("express").Router();
const { createUser, signIn } = require("../controller/auth.controller");
const { signupSchema, signInSchema } = require("../validator/auth.validator");
const validate = require("../middleware/validate.middleware");

router.post("/create-user", validate(signupSchema), createUser);
router.post("/sign-in", validate(signInSchema), signIn);

module.exports = router;
