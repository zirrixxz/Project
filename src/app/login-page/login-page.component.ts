import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginPageService } from "./login-page.service";
import { LoginReq } from "./login-page.type";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(private service: LoginPageService, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    let login: LoginReq = {
      UserName: this.username,
      Password: this.password,
    };
    console.log(login);
    this.service.postLoginApi(login).subscribe((response) => {
      console.log(response);
      console.log(response.isSuccess);
      if (response.isSuccess) {
        localStorage.setItem("userId", response.userId);
        this.router.navigate(["/dashboard"]);
      } else {
        alert("Can not login");
      }
    });
  }
}
