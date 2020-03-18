import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AjoutPatientService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
       // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
     //   this.token = currentUser && currentUser.token;


    }




  ajoutpatient(nom_patient: string, prenom_patient: string, sex: string, age: number , email_patient: string, situation_fam: string, profession_patient: string, cin: number, GRP_SANGIN : string, date_naiss : string ): Observable<boolean> {
        

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
let body = { "nom_patient": nom_patient, "prenom_patient" : prenom_patient , "sex": sex ,  "age": age, "email_patient" : email_patient , "situation_fam": situation_fam ,"profession_patient" : profession_patient , "cin": cin  , "grp_SANGIN" : GRP_SANGIN ,"date_naiss": date_naiss } ; 
 
console.log("aaa");
console.log(body);
console.log("eee");
return this.http.post('http://localhost:8089/patients', body ,options)
            .map((response: Response) => {
               console.log('cccc');
           return true;
            });

  }




/*

    login(username: string, password: string): Observable<boolean> {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

*/





  modifierpatient(  id_patient: number ,  nom_patient: string, prenom_patient: string, sex: string, age: number , email_patient: string, situation_fam: string, profession_patient: string, cin: number, GRP_SANGIN : string, date_naiss : string ): Observable<boolean> {
        

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
console.log("azertyuuiop");
console.log(age);
let a=1;
let body = { "id_patient":id_patient,   "nom_patient": nom_patient, "prenom_patient" : prenom_patient , "sex": sex ,  "age": age, "email_patient" : email_patient , "situation_fam": situation_fam ,"profession_patient" : profession_patient , "cin": cin  , "grp_SANGIN" : GRP_SANGIN ,"date_naiss": date_naiss } ; 
 
console.log("aaa");
console.log(body);
console.log("eee");
return this.http.post('http://localhost:8089/modifierpatient', body ,options)
            .map((response: Response) => {
               console.log('cccc');
           return true;
            });

  }




effacerPatient(id_patient : number) : Observable <Boolean>
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



return this.http.delete('http://localhost:8089/effacerpatient/'+id_patient ,options)
           .map((response: Response) => {
               return true})




}





}