import { Component, Inject, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { get } from "http";

import { ConfirmedValidator } from "./confirmed.validator";
import { ProfileInfoService } from "./profile-info.service";
import { ChangePasswordRequest } from "./profile-info.type";
// import { Router } from '@angular/router';
// import { LoginPageService } from 'app/login-page/login-page.service';
// import { EditUserReq } from 'app/login-page/login-page.type';

@Component({
  selector: "app-profile-info",
  templateUrl: "./profile-info.component.html",
  styleUrls: ["./profile-info.component.scss"],
})
export class ProfileInfoComponent implements OnInit {
  username: string = "";
  password: string = "";
  userId: string = "";
  fName: string = "";
  lName: string = "";
  age: number = 0;
  dateOfBirth = new Date();
  year: string = "";
  faculty: string = "";
  phoneNumber: string = "";
  roleName: string = "";
  oldPass: string = "";
  newPass: string = "";
  changePass: string = "";
  constructor(
    public dialog: MatDialog,
    private service: ProfileInfoService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.onGetInfo();
  }

  onGetInfo() {
    this.userId = localStorage.getItem("userId") ?? "";
    this.service.getCurrentUser(this.userId).subscribe((response) => {
      if (response != null) {
        this.username = response.userName;
        this.fName = response.firstName;
        this.lName = response.lastName;
        this.age = response.age;
        this.dateOfBirth = response.dateOfBirth;
        this.year = response.year;
        this.faculty = response.faculty;
        this.phoneNumber = response.phoneNumber;
        this.roleName = response.roleName;
      }
    });
  }

  changePassword() {
    let changePass: ChangePasswordRequest = {
      UserId: localStorage.getItem("userId")!,
      OldPassword: this.oldPass,
      NewPassword: this.newPass,
      UserName: localStorage.getItem("userName")!,
    };

    if (this.changePass != this.newPass) {
      console.log("no");
    } else {
      console.log("yes");
    }


  }
  openDialog() {
    this.dialog.open(dialogButtonProfileInfo, {
      data: {},
    });
  }
}

@Component({
  selector: "dialog-button-profile-info",
  templateUrl: "dialog-button-profile-info.html",
})
export class dialogButtonProfileInfo {
  constructor(@Inject(MAT_DIALOG_DATA) public data: dialogButtonProfileInfo) {}
}
export class profileInfo {}
