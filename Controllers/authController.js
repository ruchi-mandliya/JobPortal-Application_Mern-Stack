import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name) {
    next("name is require");
  }
  if (!password) {
    next("Password is require and greater than 6 characters");
  }
  if (!email) {
    next("Email is require");
  }
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    next("Email Already Register Please Login");
  }
  const user = await userModel.create({ name, email, password });
  const token = user.createJWT();
  res.status(201).send({
    success: true,
    message: "User Created Successfully",
    user: {
      name: user.name,
      lastname: user.lastName,
      email: user.email,
      location: user.location,
    },
    token,
  });
};
