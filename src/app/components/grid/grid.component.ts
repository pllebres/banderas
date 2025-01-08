import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router } from "@angular/router";
import { RouterModule } from "@angular/router";
import { trigger, style, transition, animate } from "@angular/animations";

@Component({
 selector: "app-grid",
 templateUrl: "./grid.component.html",
 styleUrl: "./grid.component.css",
 imports: [
  CommonModule,
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule,
  RouterModule
 ],
 animations: [
  trigger("animation", [
   transition("* => *", [
    style({ opacity: 0, transform: "translateY(-20px)" }),
    animate(
     "300ms ease-in-out",
     style({ opacity: 1, transform: "translateY(0)" })
    )
   ])
  ])
 ]
})
export class GridComponent {
 @Input() countries = [];
 displayedColumns = ["name", "flag", "capital"];
 constructor(private router: Router) {}

 seeMore(name: any) {
  this.router.navigateByUrl("/detail" + "/" + name);
 }
}
