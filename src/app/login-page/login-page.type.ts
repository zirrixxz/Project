export interface LoginResult {
  UserId: string; //เอาไปเรียก getCurrentUser
  IsSuccess: boolean;
  Message: string;
}
export interface LoginReq {
  UserName: string;
  Password: string;
}
