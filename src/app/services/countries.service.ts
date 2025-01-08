import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
 providedIn: "root"
})
export class CountriesService {
 constructor(private http: HttpClient) {}

 getAllCountries(): Observable<any> {
  return this.http.get<any>("https://restcountries.com/v3.1/all");
 }
 getCountryDetail(name: any): Observable<any> {
  return this.http.get(`https://restcountries.com/v3.1/alpha/${name}`);
 }
}
