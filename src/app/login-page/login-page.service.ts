import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginReq, LoginResult } from "./login-page.type";

@Injectable({
    providedIn: "root",
})
export class LoginPageService {
    private rootURL = "https://localhost:7141/";
    constructor(private http: HttpClient) { }

    postLoginApi(login:LoginReq) {
        return this.http.post<LoginResult>(this.rootURL + "api/User/Login",login);
    }

    
  

    // GetDepressionTestByTeacher(startTestDate:Date, endTestDate:Date) {
    //     return this.http.get<DepressionTestRes>(this.rootURL + "/api/DepressionTest/GetDepressionTestbyTeacher?startTestDate="+startTestDate+"&endTestDate="+endTestDate);
    // }
}