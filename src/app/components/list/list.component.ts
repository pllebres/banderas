import { CardComponent } from "../card/card.component";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CountriesService } from "../../services/countries.service";
import { GridComponent } from "../grid/grid.component";
import { MatIcon } from "@angular/material/icon";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { MatToolbar } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";

@Component({
 selector: "app-list",
 templateUrl: "./list.component.html",
 styleUrls: ["./list.component.css"],
 imports: [
  CardComponent,
  CommonModule,
  GridComponent,
  MatIcon,
  MatProgressSpinner,
  MatToolbar,
  RouterModule
 ]
})
export class ListComponent {
 countries: any = [];
 loading = true;
 showCards = true;

 constructor(private countriesService: CountriesService) {}

 ngOnInit(): void {
  this.countriesService.getAllCountries().subscribe((data: any) => {
   this.countries = data;
   this.loading = false;
  });
 }

 enableCards(enable: any): void {
  this.showCards = enable;
 }
}
