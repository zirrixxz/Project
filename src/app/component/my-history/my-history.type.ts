export interface DepressionTestHistory {
  Id: string;
  userId: string;
  ScoreResult: number;
  LevelResult: string;
  Comment: string;
  LastUpdated: Date;
  TestDate: Date;
  user: User;
}
export interface DepressionTestRes {
  id: string;
  userId: string;
  scoreResult: number;
  levelResult: string;
  comment: string;
  lastUpdated: Date;
  testDate: Date;
}
export interface EditCommentRequest {
  id: string;
  comment: string;
}
export interface Result {
  message: string;
  isSuccess: string;
  lastUpdated: Date;
  testDate: Date;
}
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
