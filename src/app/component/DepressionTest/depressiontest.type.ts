export interface DepressionTestRes {
  message: string;
  isSuccess: boolean;
  level: string;
  score: number;
}

export interface DepressionTestReq {
  userId: string;
  scoreResult: number;
  TestDate: Date;
  feedback?: string;
}

export interface DeleteDepressionTestReq {
  id: string;
}

