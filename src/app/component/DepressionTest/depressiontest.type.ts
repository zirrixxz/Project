export interface DepressionTestRes {
  message: string;
  isSuccess: boolean;
  level :string;
  score:number;
}

export interface DepressionTestReq {
  userId: string;
  scoreResult: number;
  TestDate: Date;
}

export interface DeleteDepressionTestReq {
  id: string;
}
