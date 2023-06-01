import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../_models/user';

// const httpOptions = {
//   headers : new HttpHeaders(
//     {
//       'Authorization' : 'Bearer '
//     }
//   )
// }
@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl=environment.apiUrl+'users/';
constructor(private http:HttpClient) { }

getUsers():Observable<User[]>
{
  return this.http.get<User[]>(this.baseUrl);
}
getUser(id:number):Observable<User>
{
  return this.http.get<User>(this.baseUrl+id);
}
updateUser(id:number , user:User){
    return this.http.put<User>(this.baseUrl+id,user);
}
}
