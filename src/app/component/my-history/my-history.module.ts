import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
// import { MaterialModule } from "app/material/material.module";
import { MyHistoryComponent } from "./my-history.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { DatePipe } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
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
    // MaterialModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
  ],
  declarations: [MyHistoryComponent],
  providers: [DatePipe],
})
export class MyHistoryModule {}
