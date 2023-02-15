import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Result, AddFeedbackMessageRequest } from "./feedback.type";

@Injectable({
  providedIn: "root",
})
export class FeedbackService {
  private rootURL = "https://localhost:8081/";
  constructor(private http: HttpClient) {}

  postAddFeedback(addFeedbackMessageRequest: AddFeedbackMessageRequest) {
 
    return this.http.post<Result>(
      this.rootURL + "api/Feedback/AddFeedback",
      addFeedbackMessageRequest
    );
  }
}
