import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DepressionTestHistory, DepressionTestRes } from "./my-history.type";

@Injectable({
  providedIn: "root",
})
export class MyHistoryService {
  private rootURL = "https://localhost:7141/";
  constructor(private http: HttpClient) {}

  GetDepressionTestByTeacher(startTestDate: string, endTestDate: string) {
    return this.http.get<DepressionTestHistory[]>(
      this.rootURL +
        "api/DepressionTest/GetDepressionTestbyTeacher?startTestDate=" +
        startTestDate +
        "&endTestDate=" +
        endTestDate
    );
  }
  GetDepressionTestByStudent(userId: string) {
    return this.http.get<DepressionTestRes[]>(
      this.rootURL +
        "api/DepressionTest/GetDepressionTestbyStudent?userId=" +
        userId
    );
  }
}
