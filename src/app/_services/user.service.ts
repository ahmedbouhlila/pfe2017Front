import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './index';
import { User, Medecin, Creneaux, Medicament, Ordonnance, Prescription1, Acteur } from '../_models/index';
import { Patient } from "../_models/patient";
import { Discussion } from "app/_models/discussion";

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('/api/users', options)
            .map((response: Response) => response.json());
    }

  getMedecins(): Observable<Medecin[]> {
        
       
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


headers.append("contentType","application/json");

        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://localhost:8089/medecins', options)
            .map((response: Response) => response.json());
    }


  getcreneaux( id_medecin: number, date : string ): Observable<Creneaux[]> {
        

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
headers.append('Content-Type', 'application/x-www-form-urlencoded');

let options = new RequestOptions({ headers: headers });


 //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 

let body = "id_medecin="+id_medecin+"&date="+date;
console.log(body);
console.log("azerty")


return this.http.put('http://localhost:8089/getcreneaux',body ,options)
           .map((response: Response) => response.json())

  }






 getmedicament( ): Observable<Medicament[]> {
        

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




return this.http.get('http://localhost:8089//medicaments',options)
           .map((response: Response) => response.json())

  }


getOrdonnances(): Observable<Ordonnance []>

{


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




return this.http.get('http://localhost:8089/chargerordonnanceglobale',options)
           .map((response: Response) => response.json()      )



}





chargerprescriptionglobale(idOrdonnanceglobale: number) : Observable<Prescription1[]> {




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


headers.append('content-type','application/x-www-form-urlencoded');

let options = new RequestOptions({ headers: headers });






let body ="idOrdonnanceglobale="+idOrdonnanceglobale; 
return this.http.put('http://localhost:8089/chargerprescriptionglobale',body ,options)
           .map((response: Response) => response.json())





}


getActeurs(): Observable<Acteur []>{


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




return this.http.get('http://localhost:8089/users',options)
           .map((response: Response) => response.json()      )


}




getpatients(): Observable<Patient []>{


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




return this.http.get('http://localhost:8089/patients',options)
           .map((response: Response) => response.json()      )


}


discussion(id_user : number ,id_user1: number ) : Observable <Discussion[]>
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

let body ="id_user="+id_user+"&id_user1="+id_user1;

return this.http.put('http://localhost:8089/chats',body ,options)
           .map((response: Response) => response.json())




}


envoie( id : number , id1:number, message : string ) : Observable <boolean>
{

      

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


let a=1;
let body = { "message" : message ,"user": { "id_user":id     } ,"userrecu":{ "id_user": id1  }} ; 
 
console.log("aaa");
console.log(body);
console.log("eee");
return this.http.post('http://localhost:8089/envoiemessage', body ,options)
            .map((response: Response) => {
               console.log('cccc');
           return true;
            });

}

//



chargerpatient(id_patient: number) : Observable <Patient>

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

let body ="id_patient="+id_patient;

return this.http.put('http://localhost:8089/chargerpatient',body ,options)
           .map((response: Response) => response.json())




}




//
demarage(id_user : number  ) : Observable <any[]>
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

let body ="id_user="+id_user;

return this.http.put('http://localhost:8089/demarage',body ,options)
           .map((response: Response) => response.json())




}






}