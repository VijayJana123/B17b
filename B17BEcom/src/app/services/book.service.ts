import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public search = new BehaviorSubject<string>("");
  public filter = new BehaviorSubject<any>([]);
  public price = new BehaviorSubject<any>([""]);

  
  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get<any>("https://bookcart.azurewebsites.net/api/Book")
    .pipe(map((res:any)=>{
      return res
    }))
  }

  getData(){
    return this.http.get<any>("https://bookcart.azurewebsites.net/api/Book")
      .pipe(
        map((response:[]) => response.map(item => item['title']))
      )
  }

}
