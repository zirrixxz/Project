export interface DepressionTestHistory {
  id: string;
  userId: string;
  scoreResult: number;
  levelResult: string;
  comment: string;
  lastUpdated: Date;
  testDate: Date;
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

export interface DepressionTestHistoryGroup {
  date: string;
  list: DepressionTestHistory[];
}

export interface DepressionTestResGroup {
  date: string;
  list: DepressionTestRes[];
}
