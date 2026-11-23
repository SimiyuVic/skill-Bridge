import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //form validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    //check if user exists
    const user = await User.findOne({ email: normalizedEmail }).select(
      "+password",
    );

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    //check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    //create token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      },
    );

    //create a cookie
    res.cookie("skillBridge", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: `Welcome back ${user.fullname}`,
      user: user.role,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

//check cookie
export const checkCookie = async (req, res) => {
  try {
    const token = req.cookies.skillBridge;

    if (token) {
      return res.status(200).json({
        message: true
      });
    }
    return res.status(200).json({
      message: false
    });

  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
};

export const getUserDetails = async (req, res) => {
  try {
    const { user } = req;
    res.status(200).json({
      success: true,
      user
    });
  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something Went wrong!"
    });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("skillBridge", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });

    res.status(200).json({
      success: true,
      message: "Logged Out!"
    });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong"
    })
  }
};

//change avatar
export const changeAvatar = async (req, res) => {
  try {
    const { file } = req;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No image selected"
      });
    }
    
    console.log(file);
  }
  catch (error) {
    //console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
}
