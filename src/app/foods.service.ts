import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor(private http:HttpClient) { }

  getFoods(type:any):Observable<any>{
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${type}`)
  }
}
