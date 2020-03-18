import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Rendez_vousMedecin } from "../../_models/rendez_vousmedecin";
import { Conger } from "app/_models/conger";


@Injectable()
export class AjoutCreneauxService {



    constructor(private http: Http) {
       


    }


ajoutcreneaux(hdebut:number,hfin:number,mdebut:number, mfin:number , periode : number): Observable<boolean> {
        

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

//
headers.append('content-type','application/x-www-form-urlencoded');

let options = new RequestOptions({ headers: headers });


 //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 


let a=1;
let body ="id_medecin="+id_medecin+"&Hdebut="+hdebut+"&Hfin="+hfin+"&Mdebut="+mdebut+"&Mfin="+mfin+"&periode="+periode; 
 
console.log("aaa");
console.log(body);
console.log("eee");
return this.http.put('http://localhost:8089/ajoutcreneaux', body ,options)
            .map((response: Response) => {
               console.log('cccc');
           return true;
            });

  }
//

ajoutconger(dateDebut: Date, dateFin: Date): Observable <Rendez_vousMedecin[]> {
        

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

//
headers.append('content-type','application/x-www-form-urlencoded');

let options = new RequestOptions({ headers: headers });


 //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 


let a=1;
let body ="id_medecin="+id_medecin+"&dateDebut="+dateDebut+"&dateFin="+dateFin; 
 
console.log("aaa");
console.log(body);
console.log("eee");
return this.http.put('http://localhost:8089/ajoutconger', body ,options)
            .map((response: Response) =>   response.json()  );

  }

validerconger(dateDebut: Date, dateFin: Date, list :Rendez_vousMedecin[]): Observable <Boolean> {


 let currentUser = JSON.parse(localStorage.getItem('currentUser'));

let username=  currentUser.username;
 let password= currentUser.password 
let id_user= currentUser.id_user;
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



let body = list; 
 
console.log("aaa");
console.log(body);
console.log("eee");
return this.http.post('http://localhost:8089/validerconger/'+dateDebut+'/'+dateFin+'/'+id_user, body ,options)
            .map((response: Response) => {
               console.log('cccc');
           return true;
            });

  }









listconger(): Observable <Conger[]> {
        

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

//
headers.append('content-type','application/x-www-form-urlencoded');

let options = new RequestOptions({ headers: headers });


 //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 



let body ="id_medecin="+id_medecin; 
 
console.log("aaa");
console.log(body);
console.log("eee");
return this.http.put('http://localhost:8089/getconger', body ,options)
            .map((response: Response) =>   response.json()  );

  }












}





