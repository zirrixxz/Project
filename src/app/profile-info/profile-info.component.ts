import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Router } from "@angular/router";

import { ProfileInfoService } from "./profile-info.service";
import { ChangePasswordRequest } from "./profile-info.type";

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

  hide = true;

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
    if (this.changePass != this.newPass) {
      console.log("no");
    } else {
      console.log("yes");
      this.openDialog();
    }
  }
  openDialog() {
    const dialogRef = this.dialog.open(dialogButtonProfileInfo);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let changePass: ChangePasswordRequest = {
          UserId: localStorage.getItem("userId")!,
          OldPassword: this.oldPass,
          NewPassword: this.newPass,
          UserName: localStorage.getItem("userName")!,
        };
        this.service.postChangePasswordApi(changePass).subscribe((response) => {
          if (response.isSuccess) {
            console.log(response.isSuccess);

            this.dialog.open(dialogComfirm, {
              height: "50%",
              width: "40%",
              data: true,
            });
          } else {
            this.dialog.open(dialogComfirm, {
              height: "50%",
              width: "40%",
              data: false,
            });
          }
        });
      }
    });
  }
}

@Component({
  selector: "dialog-comfirm",
  templateUrl: "dialog-comfirm.html",
  styleUrls: ["./profile-info.component.scss"],
})
export class dialogComfirm {
  constructor(@Inject(MAT_DIALOG_DATA) public data: boolean) {}
}

@Component({
  selector: "dialog-button-profile-info",
  templateUrl: "dialog-button-profile-info.html",
})
export class dialogButtonProfileInfo {
  constructor(
    public dialogRef: MatDialogRef<dialogButtonProfileInfo>,
    @Inject(MAT_DIALOG_DATA) public data: boolean
  ) {}
  onNoClick() {
    this.dialogRef.close(false);
  }
  confirm() {
    this.dialogRef.close(true);
  }
}
export class profileInfo {}
