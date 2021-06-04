import User from '../models/userModel.js';

export const login = async (req, res) => {

  try {

    //CHECK FOR LOGIN CREDENTIALS
    const { email, password } = req.body;

    const user = await User.findOne({email});

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        mode: user.mode,
        readingList: user.readingList,
        userAuth: true
      });
    } else {
      res.status(401).json({error: "Invalid email or password"});
    }
  } catch (err) {
    res.status(500).json({error: "Server error"})
  }
}

export const logout = async (req, res) => {
  try {
    await req.session.destroy();
    res.status(200).json({message: "Logged out"})
  } catch (err) {
    res.status(500).json({error: "Server error"})
  }
}

export const protectedRoute = (req, res) => {
  console.log('protected route');
  res.json({message: "Protected route"});
}