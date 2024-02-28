export const enum Gender {
  MALE = "male",
  FEMALE = "female",
}

export interface SignUp {
  email: string;
  password: string;
  confirmPassword: string;
  fullname: string;
  gender: Gender;
}
