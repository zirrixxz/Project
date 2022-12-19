import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { DepressionTestComponent } from "./depressiontest.component";
import { MatRadioModule } from "@angular/material/radio";
import { MatDividerModule } from "@angular/material/divider";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatStepperModule } from "@angular/material/stepper";
import { HttpClientModule } from "@angular/common/http";



const routes: Routes = [
  {
    path: "",
   
    component: DepressionTestComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatRadioModule,
    MatDividerModule,
    MatStepperModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule
  ],
  declarations: [DepressionTestComponent],
})
export class DepressionTestModule {}
