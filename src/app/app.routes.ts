import { Routes } from "@angular/router";
import { ListComponent } from "./components/list/list.component";
import { DetailComponent } from "./components/detail/detail.component";

export const routes: Routes = [
 { path: "", component: ListComponent },
 { path: "detail/:id", component: DetailComponent },
 { path: "**", component: ListComponent }
];
