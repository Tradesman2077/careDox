import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CarePlan } from '../_models/CarePlan';

@Injectable({
  providedIn: 'root'
})
export class CareplanService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
  }

   getCarePlanById(id: number){
    return this.http.get<CarePlan>(this.baseUrl + 'CarePlans/' + id);
  }
  updateCarePlan(carePlan : CarePlan, id : number){
    return this.http.put(this.baseUrl + 'CarePlans/' + id, carePlan);
  }
}
