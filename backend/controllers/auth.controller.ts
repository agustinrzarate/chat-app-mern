import User from "../models/user/user.model";
import { Gender, SignUp } from "../models/user/SignUp";
import { signupValidations } from "../models/user/validations";
import { Request, Response } from "express";

export type ErrorState = {
  message: string;
  status: number;
}

export const signup = async (req: Request, res: Response) => {
  try {
    const { fullname, email, password, gender, confirmPassword } =
      req.body;

    signupValidations({ email, password, confirmPassword, gender, fullname }); 

    const placeholderProfilePicture =
      gender === Gender.MALE
        ? `https://avatar.iran.liara.run/public/boy?username=${fullname}`
        : `https://avatar.iran.liara.run/public/girl?username=${fullname}`;

    const newUser = new User({
      fullname,
      email,
      password,
      confirmPassword,
      profilePicture: placeholderProfilePicture,
      gender,
    });

    await newUser.save();

    res.status(201).json({ newUser, message: "User created successfully" });

  } catch (error: unknown) {

    if ((error as ErrorState).status) {
      return res.status((error as ErrorState).status).json({ message: (error as ErrorState).message });
    }

    return res.status(500).json({ message: "An error occurred" });
  }
};

export const signin = (req: Request, res: Response) => {
  console.log("SIGNIN");
};

export const signout = async (req: Request, res: Response) => {
  console.log("SIGNOUT");
};
