import { Component, OnInit } from "@angular/core";
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

  constructor(private service: LoginPageService) {}

  ngOnInit() {}

  onLogin() {
    let login: LoginReq = {
      UserName: this.username,
      Password: this.password,
    };
    console.log(login);
    this.service.postLoginApi(login).subscribe((response) => {
      console.log(response.UserId);
    });
  }
}
