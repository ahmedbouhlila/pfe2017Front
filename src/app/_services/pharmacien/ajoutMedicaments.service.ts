import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { Medicament } from "../../_models/index";

@Injectable()
export class AjoutMedicamentsService {
   

    constructor(private http: Http) {
        // set token if saved in local storage
       // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
     //   this.token = currentUser && currentUser.token;


    }




  ajoutMedicaments(nom:string ,nbr:Number , prix : Number)  : Observable<Medicament[]>  {

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

	


let body = { "nom": nom, "prix":prix , "nbr":nbr  } ; 
console.log(body);

return this.http.post('http://localhost:8089/medicaments', body ,options)
            .map((response: Response) => {
               console.log('cccc'); 
                console.log(response.json());
        return response.json();    
        })



  }

modifierMedicaments(id_medicaments:number,nom:string,nbr:number, prix:number)  : Observable<boolean>  {

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


headers.append("contentType","application/json");

let options = new RequestOptions({ headers: headers });





    


let body = {"id_medicaments":id_medicaments  , "nom": nom, "nbr" : nbr, "prix":prix  } ; 


return this.http.post('http://localhost:8089/modifiermedicaments', body ,options)
            .map((response: Response) => {
               console.log('cccc'); 
                console.log(response.json());
        return response.json();    
})




}
effacerMedicaments(id_medicaments : number) : Observable <Boolean>
{

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



return this.http.delete('http://localhost:8089/effacermedicaments/'+id_medicaments ,options)
           .map((response: Response) => {
               return true})


}}

