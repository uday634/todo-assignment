const User = require("../models/user");
const bcrypt = require("bcrypt");

// SIGN UP
exports.signUp = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User Already Exists' });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({ email, username, password: hashedPassword });

    await newUser.save();

    res.status(200).json({ message: 'Signup Successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// LOG IN
exports.signIn = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    
    if (!user) {
      res.status(200).json({ message: "User Not Found. Please Sign Up First." });
      return;
    }
    
    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    console.log(isPasswordCorrect)
    
    if (!isPasswordCorrect) {
      res.status(200).json({ message: "Incorrect Password. Please Enter the Correct Password." });
      return;
    }
    
    const { password, ...userWithoutPassword } = user._doc;
    res.status(200).json({ message: userWithoutPassword });
  } catch (err) {
    res.status(200).json({ message: "User Not Found" });
  }  
}; 
