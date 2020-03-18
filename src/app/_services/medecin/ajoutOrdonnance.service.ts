import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Prescription1 } from "../../_models/index";



@Injectable()
export class AjoutOrdonnanceService {
    

    constructor(private http: Http) {
        // set token if saved in local storage
       // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
     //   this.token = currentUser && currentUser.token;


    }




  ajoutOrdonnance(  prescription1: Prescription1[]   ): Observable<boolean>{



 let currentUser = JSON.parse(localStorage.getItem('currentUser'));

let username=  currentUser.username;
 let password= currentUser.password 

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
headers.append("contentType","application/json");

let options = new RequestOptions({ headers: headers });


 //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 



let body = prescription1; 
 
console.log("aaa");
console.log(body);
console.log("eee");
return this.http.post('http://localhost:8089/ajoutordonnancetype', body ,options)
            .map((response: Response) => {
               console.log('cccc');
           return true;
            });

  }








 effacerOrdonnance(id_ordonnance_type : number    ): Observable<boolean>{

let currentUser = JSON.parse(localStorage.getItem('currentUser'));

let username=  currentUser.username;
 let password= currentUser.password 

        let headers = new Headers();
 
headers.append('Authorization','Basic '+ btoa(username + ':' + password) );
headers.append("Access-Control-Allow-Origin", "*");
headers.append("Access-Control-Allow-Headers",
        "origin, content-type, accept, authorization");
headers.append("Access-Control-Allow-Credentials", "true");
headers.append("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS, HEAD");

//
headers.append('Content-Type', 'application/x-www-form-urlencoded');

let options = new RequestOptions({ headers: headers });



return this.http.delete('http://localhost:8089/supprimerordonnancetype/'+id_ordonnance_type ,options)
           .map((response: Response) => {
               return true})



  }

modifierOrdonnance(  prescription1: Prescription1[] ,id_ordonnance_type : number, nom : string  ): Observable<boolean>{



 let currentUser = JSON.parse(localStorage.getItem('currentUser'));

let username=  currentUser.username;
 let password= currentUser.password 

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
headers.append("contentType","application/json");

let options = new RequestOptions({ headers: headers });


 //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 



let body = prescription1; 
 
console.log("aaa");
console.log(body);
console.log(id_ordonnance_type);
console.log(nom);
console.log("eee");
return this.http.post('http://localhost:8089/modifierordonnancetype/'+id_ordonnance_type+'/'+nom, body ,options)
            .map((response: Response) => {
               console.log('cccc');
           return true;
            });

  }














  }