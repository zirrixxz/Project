import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MyHistoryComponent } from "./my-history.component";
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [
  {
    path: "",

    component: MyHistoryComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatTableModule,
    
  ],
  declarations: [MyHistoryComponent],
})
export class MyHistoryModule {}
