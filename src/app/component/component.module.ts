import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ComponentsRoutes } from "./component.routing";
import { NgbdpaginationBasicComponent } from "./pagination/pagination.component";
import { NgbdAlertBasicComponent } from "./alert/alert.component";
import { NgbdDropdownBasicComponent } from "./dropdown-collapse/dropdown-collapse.component";
import { NgbdnavBasicComponent } from "./nav/nav.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CardsComponent } from "./card/card.component";
import { TableComponent } from "./table/table.component";

import { MatRadioModule } from "@angular/material/radio";
import { MatDividerModule } from "@angular/material/divider";
import { MatStepperModule } from "@angular/material/stepper";

import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatRadioModule,
    MatDividerModule,
    MatStepperModule,
    MatInputModule,
    MatDialogModule,
  ],
  declarations: [
    NgbdpaginationBasicComponent,
    NgbdAlertBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdnavBasicComponent,
    ButtonsComponent,
    CardsComponent,
    TableComponent,
  ],
})
export class ComponentsModule {}
