export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  age: number;
  dateOfBirth: Date;
  year: string;
  faculty: string;
  phoneNumber: string;
  userName: string;
  roleName: string;
}
export interface Result {
  oldpassword: string;
  newpassword: string;
  Message: string;
  isSuccess: boolean;
}
export interface ChangePasswordRequest {
  UserId: string;
  OldPassword: string;
  NewPassword: string;
  UserName: string;
}
