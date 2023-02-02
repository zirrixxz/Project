export interface DepressionTestHistory {
  Id: string;
  userId: string;
  ScoreResult: number;
  LevelResult: string;
  Comment: string;
  LastUpdated: Date;
  TestDate: Date;
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
}
