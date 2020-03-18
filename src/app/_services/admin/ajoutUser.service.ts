import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Acteur } from "../../_models/acteur";

@Injectable()
export class AjoutUserService {
   

    constructor(private http: Http) {
        // set token if saved in local storage
       // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
     //   this.token = currentUser && currentUser.token;


    }




  ajoutUser(nom:string ,prenom :string,cin: number,age:number,date_naiss:string,sex:string,tel: number,profession:string,email:string,etat_fam:string,login:string,pass:string,type_medecin:string,  activer:boolean
)  : Observable<boolean>  {

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

	let role =0;


  switch (profession)
  {
      
  case 'Secretaire' :
    role=1;
    break;
  case 'Medecin' :
  role=3;
    break;
case 'Pharmacien' :
  role=4;
    break;
    case 'Administrateur' :
 role=2;
    break;

default : 
role=0;
;


}    


let body = { "nom": nom, "prenom" : prenom, "sex": sex ,  "age": age, "email" : email, "etat_fam": etat_fam ,"profession" : profession, "cin": cin  ,"date_naiss": date_naiss, "login" : login, "pass" : pass,"type_medecin" : type_medecin,"activer": activer ,"tel" : tel,"role" : {  "id_role" : role}  } ; 


return this.http.post('http://localhost:8089/users', body ,options)
            .map((response: Response) => {
               console.log('cccc'); 
                console.log(response.json());
        return response.json();    
        })



  }






 modifierUser(acteur : Acteur)  : Observable<boolean>  {

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

	let role =0;


  switch (acteur.profession)
  {
      
  case 'Secretaire' :
    role=1;
    break;
  case 'Medecin' :
  role=3;
    break;
case 'Pharmacien' :
  role=4;
    break;
    case 'Administrateur' :
 role=2;
    break;

default : 
role=0;
;


}    


let body = {"id_user":acteur.id_user  , "nom": acteur.nom, "prenom" : acteur.prenom, "sex": acteur.sex ,  "age": acteur.age, "email" : acteur.email, "etat_fam": acteur.etat_fam ,"profession" : acteur.profession, "cin": acteur.cin  ,"date_naiss": acteur.date_naiss, "login" : acteur.login, "pass" : acteur.pass,"type_medecin" : acteur.type_medecin, "activer":acteur.activer ,"tel" : acteur.tel,"role" : {  "id_role" : role}  } ; 


return this.http.post('http://localhost:8089/modifierusers', body ,options)
            .map((response: Response) => {
               console.log('cccc'); 
                console.log(response.json());
        return response.json();    
        })



  }





effacerUser(id_user : number) : Observable <Boolean>
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



return this.http.delete('http://localhost:8089/effaceruser/'+id_user ,options)
           .map((response: Response) => {
               return true})




}


chargerprofile( ) : Observable <Acteur>

{
let currentUser = JSON.parse(localStorage.getItem('currentUser'));

let username=  currentUser.username;
 let password= currentUser.password ;
let id =currentUser.id_user ;
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

let body="id_user="+id;

return this.http.put('http://localhost:8089/profile' , body,options)
           .map((response: Response) => {
               return response.json();})



        
}


}