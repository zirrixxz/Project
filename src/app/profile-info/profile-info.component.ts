import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  
  }

  openDialog() {
    this.dialog.open(dialogButtonProfileInfo, {
      data: {
        
      },
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
export class  profileInfo{}




