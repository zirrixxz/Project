import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AddUserReq, AddUserRes,  EditUserReq, LoginReq, LoginResult } from "./login-page.type";



@Injectable({
    providedIn: "root",
})
export class LoginPageService {
    private rootURL = "https://localhost:7141/";
    constructor(private http: HttpClient,) { }

    postLoginApi(login:LoginReq) {
        return this.http.post<LoginResult>(this.rootURL + "api/User/Login",login);
    }
    postAddUserApi(adduser:AddUserReq) {
        return this.http.post<AddUserRes>(this.rootURL + "api/User/AddUser",adduser);
    }
    postEditUserApi(edituser:EditUserReq) {
        return this.http.post<AddUserRes>(this.rootURL + "api/User/EditUser",edituser);
    }
  
  

   
}