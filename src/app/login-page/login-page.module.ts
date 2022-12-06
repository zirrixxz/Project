import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { LoginPageComponent } from "./login-page.component";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';



const routes: Routes = [
  {
    path: "",
    data: {
      title: "LoginPage",
      urls: [{ title: "LoginPage", url: "/login-page" }, { title: "LoginPage" }],
    },
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    
  ],
  declarations: [
    LoginPageComponent,
  ],
})
export class LoginPageModule {}
