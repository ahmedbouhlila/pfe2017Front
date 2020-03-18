import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Ordonnance } from "../../_models/ordonnance";



@Injectable()
export class ChargerOrdonnanceService {
  constructor(private http: Http) {
       


    }



chargerordonnance( ): Observable<Ordonnance[]> {
        

 let currentUser = JSON.parse(localStorage.getItem('currentUser'));

let username=  currentUser.username;
 let password= currentUser.password 

        let headers = new Headers();
 let id_medecin=currentUser.id_user ;
headers.append('Authorization','Basic '+ btoa(username + ':' + password) );




//console.log(role);

headers.append("Access-Control-Allow-Origin", "*");
headers.append("Access-Control-Allow-Headers",
        "origin, content-type, accept, authorization");
headers.append("Access-Control-Allow-Credentials", "true");
headers.append("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS, HEAD");


headers.append('content-type','application/x-www-form-urlencoded');

let options = new RequestOptions({ headers: headers });


 //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 



let body ="id_medecin="+id_medecin; 
return this.http.put('http://localhost:8089/ordonnancemedecin',body ,options)
           .map((response: Response) => response.json())


}

}
    
