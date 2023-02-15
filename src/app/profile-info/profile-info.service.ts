import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { ChangePasswordRequest, Result, User } from "./profile-info.type";

@Injectable({
  providedIn: "root",
})
export class ProfileInfoService {
  private rootURL = "https://localhost:8081/";
  constructor(private http: HttpClient) {}
  postChangePasswordApi(changepassword: ChangePasswordRequest) {
    return this.http.post<Result>(
      this.rootURL + "api/User/ChangePassword",
      changepassword
    );
  }

  getCurrentUser(userId: string) {
    return this.http.get<User>(
      this.rootURL + "api/User/GetCurrentUser?userid=" + userId
    );
  }
}
