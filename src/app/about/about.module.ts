import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { MatGridListModule } from "@angular/material/grid-list";
import {MatDividerModule} from '@angular/material/divider';

import { AboutComponent } from "./about.component";

const routes: Routes = [
  {
    path: "",

    component: AboutComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatDividerModule
  ],
  declarations: [AboutComponent],
})
export class AboutModule {}
