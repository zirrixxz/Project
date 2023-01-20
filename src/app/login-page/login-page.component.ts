import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
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

  loginFormControl = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  emailControl = new FormControl("", [Validators.required]);

  constructor(private service: LoginPageService, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    let login: LoginReq = {
      UserName: this.loginFormControl.value.username ?? "",
      Password: this.loginFormControl.value.password ?? "",
    };
    console.log(login);
    if (this.loginFormControl.valid) {
      this.service.postLoginApi(login).subscribe((response) => {
        console.log(response);
        console.log(response.isSuccess);
        if (response.isSuccess) {
          localStorage.setItem("userId", response.userId);
          localStorage.setItem("firstName", response.firstName);
          localStorage.setItem(
            "userName",
            this.loginFormControl.value.username ?? ""
          );
          localStorage.setItem("lastName", response.lastName);
          localStorage.setItem("roleName", response.roleName);
          localStorage.setItem("token", response.token);
          this.router.navigate(["/dashboard"]);
        } else {
          alert("Can not login");
        }
      });
    } else {
      alert("Can not login");
    }
  }
}
