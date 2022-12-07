export interface LoginResult {
  UserId: string; //เอาไปเรียก getCurrentUser
  IsSuccess: boolean;
  Message: string;
}
export interface LoginReq {
  UserName: string;
  Password: string;
}
export interface AddUserReq {
    UserName:string
    Password:string
    FirstName:string
    LastName:string
    Email:string
    Age:number
    DateOfBirth:Date
    Year:string
    Faculty:string
    RoleName:string

}

export interface AddUserRes{
   Message:string
    isSuccess:boolean
 
}
export interface EditUserReq{
 
    id:string 
    firstName:string 
    lastName:string 
    email:string 
    age:number
    dateOdBirth:Date
    year:string 
    faculty:string 
  
}
export interface ChangePasswordRes{
  
    userId:string
    oldPassword:string
    newPassword:string
 
}