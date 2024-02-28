import { Gender, SignUp } from "./SignUp";
import User from "./user.model";

export type ErrorState = {
  message: string;
  status: number;
}



const passwordIsValid = (password: string) => {
  if (password.length < 6) {
    throw {
      message: "Password must be at least 6 characters long",
      status: 400,
    };
  }

  const isValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g.test(
    password
  );

  if (!isValid) {
    throw {
      message: "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      status: 400,
    };
  }
};

const emailIsValid = (email: string) => {
  if (!email) throw Error("Email is required");

  const emailExist = User.findOne({ email });

  if (emailExist !== null) {
    throw {
      message: "Email already exists",
      status: 400,
    };
  }

  const isValid = /\S+@\S+\.\S+/g.test(email);

  if (!isValid) {
    throw {
      message: "Email is not valid",
      status: 400,
    };
  }
};

const confirmPasswordIsValid = (password: string, confirmPassword: string) => {
  if (password !== confirmPassword) {
    throw {
      message: "Password and confirm password do not match",
      status: 400,
    };
  }
};

const genderIsValid = (gender: Gender) => {
  if (!gender) throw {
    message: 'Gender is required',
    status: 400
  }

  if(gender !== Gender.FEMALE && gender !== Gender.MALE) {
    throw {
      message: 'Gender must be male or female',
      status: 400
    }
  }
}

const fullnameIsValid = (fullname: string) => {
  if (!fullname) throw {
    message: "Fullname is required",
    status: 400
  }
};

export const signupValidations = (user: SignUp) => {
  const { email, password, confirmPassword, gender, fullname } = user;
  try {
    fullnameIsValid(fullname);
    emailIsValid(email);
    passwordIsValid(password);
    confirmPasswordIsValid(password, confirmPassword);
    genderIsValid(gender);

  } catch (error) {
    throw error;
  }
};
