export interface DepressionTestRes {
  message: string;
  isSuccess: boolean;
}

export interface DepressionTestReq {
  userId: string;
  scoreResult: number;
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
export interface DeleteDepressionTestReq{
  
id:string 

}


