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
