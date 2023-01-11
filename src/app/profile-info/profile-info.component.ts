import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Router } from '@angular/router';
// import { LoginPageService } from 'app/login-page/login-page.service';
// import { EditUserReq } from 'app/login-page/login-page.type';


@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  username: string = "";
  password: string = "";
 
 

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  
  }

  // editFormControl = new FormGroup({
  //   username: new FormControl("", Validators.required),
  //   password: new FormControl("", Validators.required),
  // });

  // onEdit() {
  //   let edit: EditUserReq = {
  //     Password: this.editFormControl.value.password??"",
  //   };
  //   console.log(edit);
  //   if(this.editFormControl.valid){
  //     this.service.postEditUserApi(edit).subscribe((response) => {
  //       console.log(response);
  //       console.log(response.isSuccess);
  //       if (response.isSuccess) {
  //         localStorage.setItem("userId", response.userId);
  //         this.router.navigate(["/dashboard"]);
  //       } else {
  //         alert("Can not login");
  //       }
  //     });
  //   }
  //   else{
    //   alert("Can not login");
    // }

  openDialog() {
    this.dialog.open(dialogButtonProfileInfo, {
      data: {
        
      },
    });
  }}

@Component({
  selector: "dialog-button-profile-info",
  templateUrl: "dialog-button-profile-info.html",
})
export class dialogButtonProfileInfo {
  constructor(@Inject(MAT_DIALOG_DATA) public data: dialogButtonProfileInfo) {}
}
export class  profileInfo{}




