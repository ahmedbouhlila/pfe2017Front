import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AjoutRendez_VousService {
  

    constructor(private http: Http) {
        // set token if saved in local storage
       // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
     //   this.token = currentUser && currentUser.token;


    }





  ajoutrendez_vous(id_creneaux: number ,id_patient: number ,jour: string   ): Observable<boolean> {
        

 let currentUser = JSON.parse(localStorage.getItem('currentUser'));

let username=  currentUser.username;
 let password= currentUser.password 
let id_user=currentUser.id_user; 
        let headers = new Headers();
 
headers.append('Authorization','Basic '+ btoa(username + ':' + password) );




//console.log(role);

headers.append("Access-Control-Allow-Origin", "*");
headers.append("Access-Control-Allow-Headers",
        "origin, content-type, accept, authorization");
headers.append("Access-Control-Allow-Credentials", "true");
headers.append("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS, HEAD");

//
headers.append('Content-Type', 'application/x-www-form-urlencoded');

let options = new RequestOptions({ headers: headers });


 //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 



let body = "id_creneaux="+id_creneaux+"&id_patient="+id_patient+"&jour="+jour+"&id_user="+id_user;
console.log(body);



return this.http.put('http://localhost:8089/ajoutrendez_vous',body ,options)
         .map((response: Response) => {
               console.log('cccc');
         
               let id_rendez_vous = response.json().id_rendez_vous ;
            
               console.log(id_rendez_vous);
                if (id_rendez_vous) {
             
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
 












 }





}