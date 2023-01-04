import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { ProfileInfoComponent } from "./profile-info.component";

const routes: Routes = [
    {
      path: "",
     
      component: ProfileInfoComponent,
    },
  ];
  
  @NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule.forChild(routes),
      MatCardModule,
      MatDividerModule,
      MatInputModule,
      MatDialogModule,
      MatButtonModule,
      MatDatepickerModule
  
    ],
    declarations: [ProfileInfoComponent],
  })
  export class ProfileInfoModule {}