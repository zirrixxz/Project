export interface LoginResult {
  userId: string;
  isSuccess: boolean;
  message: string;
  roleName: string;
  token: string;
  firstName: string;
  lastName: string;
}
export interface LoginReq {
  UserName: string;
  Password: string;
}
export interface AddUserReq {
  UserName: string;
  Password: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Age: number;
  DateOfBirth: Date;
  Year: string;
  Faculty: string;
  RoleName: string;
}

export interface AddUserRes {
  userId(arg0: string, userId: any): unknown;
  Message: string;
  isSuccess: boolean;
}
export interface EditUserReq {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  dateOdBirth: Date;
  year: string;
  faculty: string;
}
export interface ChangePasswordRes {
  userId: string;
  oldPassword: string;
  newPassword: string;
}
