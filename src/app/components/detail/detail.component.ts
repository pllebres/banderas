import { ActivatedRoute, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CountriesService } from "../../services/countries.service";
import { MatButtonModule } from "@angular/material/button";
import { MatCard } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
 selector: "app-detail",
 imports: [
  CommonModule,
  MatButtonModule,
  MatCard,
  MatExpansionModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatToolbarModule,
  RouterModule
 ],
 templateUrl: "./detail.component.html",
 styleUrl: "./detail.component.css"
})
export class DetailComponent {
 country: any;
 loading: boolean = true;
 showDetails: boolean = false;
 constructor(
  private activatedRoute: ActivatedRoute,
  private countriesService: CountriesService
 ) {}

 ngOnInit(): void {
  const identifier = this.activatedRoute.snapshot.paramMap.get("id");

  this.countriesService.getCountryDetail(identifier).subscribe((response) => {
   this.country = response[0];
   this.loading = false;
  });
 }

 enableDetails(): void {
  this.showDetails = !this.showDetails;
 }
}
