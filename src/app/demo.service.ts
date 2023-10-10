import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService 
{
  link1 = "http://localhost:9001/login";
  link2 = "http://localhost:9001/insert";
  link3 = "http://localhost:9001/update";
  link4 = "http://localhost:9001/delete";
  link5 = "http://localhost:9001/view";

  constructor(private h1:HttpClient) 
  { }

 insertdata1(data:any) :Observable<any>
 {
    return this.h1.post<any>(this.link2,data);
}

logindata1(user:User) :Observable<any>
{
   return this.h1.post<any>(`${this.link1}`,user);
}

update(data: any): Observable<any> {
  return this.h1.post<any>(this.link3,data);
}

delete(data: any): Observable<void> {
  return this.h1.post<void>(this.link4,data);
}

viewdata1(): Observable<any[]> {
  return this.h1.get<any[]>(`${this.link5}`);
}
/*login(username:string, password:string)
{
 console.log(username);
 console.log(password);
   const headers = new HttpHeaders({Authorization:'Basic'+btoa(username+':'+password)});
   return this.h1.get("http://localhost:9001/",{headers,responseType:'text'as 'json' });
}*/
}
