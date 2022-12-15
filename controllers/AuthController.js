const User = require("../models/User");

const AuthController = {};

AuthController.register = async (req, res) => {
   console.log(req.body);

   try {
      const { name, email, password } = req.body;

      // PASSWORD CODE VALIDATION
      if (password.length < 6) {
         return res.status(500).json({
            success: false,
            message: "Password is shorter than 6 characters",
         });
      }

      const newUser = {
         name: name,
         email: email,
         password: password,
      };

      await User.create(newUser);

      return res.status(200).json({
         success: true,
         message: "Create user successfully",
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error creating user",
         error: error?.message || error,
      });
   }
};

AuthController.login = async () => {};

module.exports = AuthController;
