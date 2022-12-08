import { Routes } from "@angular/router";
import { NgbdpaginationBasicComponent } from "./pagination/pagination.component";
import { NgbdAlertBasicComponent } from "./alert/alert.component";

import { NgbdDropdownBasicComponent } from "./dropdown-collapse/dropdown-collapse.component";
import { NgbdnavBasicComponent } from "./nav/nav.component";
import { DepressionTestComponent } from "./DepressionTest/depressiontest.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CardsComponent } from "./card/card.component";
import { TableComponent } from "./table/table.component";

export const ComponentsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "table",
        component: TableComponent,
      },
      {
        path: "card",
        component: CardsComponent,
      },
      {
        path: "pagination",
        component: NgbdpaginationBasicComponent,
      },
     
      {
        path: "alert",
        component: NgbdAlertBasicComponent,
      },
      {
        path: "dropdown",
        component: NgbdDropdownBasicComponent,
      },
      {
        path: "nav",
        component: NgbdnavBasicComponent,
      },
      {
        path: "buttons",
        component: ButtonsComponent,
      },
      {
        path: "depressiontest",
        component: DepressionTestComponent,
      },
    ],
  },
];
