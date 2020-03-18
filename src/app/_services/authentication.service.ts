import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }


  login(username: string, password: string): Observable<number> {
        
        
        let headers = new Headers();
     console.log('aaa');
headers.append('Authorization','Basic '+ btoa(username + ':' + password) );

console.log(headers);

console.log('role');




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
let body = { "login": username, "cin" : 555 , "pass": password } ; 
 
console.log("aaa");
console.log(body);
console.log("eee");
return this.http.post('http://localhost:8089/login', body ,options)
            .map((response: Response) => {
               console.log('cccc');
                // login successful if there's a jwt token in the response
         //    if (1)
           //  return true;   
              console.log("hhaaaaaaaaaaaaa");
               let role=0;
              if(  response.json().activer!=true  )
            return role;
               let token = response.json().login ;
             let   id_user=response.json().id_user;
              role=response.json().role.id_role  ; 
              let nom = response.json().nom;
              let prenom= response.json().prenom;
              console.log("hhaaaaaaaaaaaaa");
              console.log(response.json());
             console.log(role);
               console.log(token);
               let activer=response.json().activer;
                if (token) {
                    // set token property
                   this.token = "logged";
console.log(this.token);
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, password: password ,token: token ,nom : nom, prenom : prenom ,id_user: id_user , role : role }));
console.log(localStorage);
                    // return true to indicate successful login
                    return role;
                } else {
                    // return false to indicate failed login
                    return role;
                }
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
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }



oublier(login: string, email: string): Observable<boolean> {
        
        
        let headers = new Headers();
     console.log('aaa');





headers.append("Access-Control-Allow-Origin", "*");
headers.append("Access-Control-Allow-Headers",
        "origin, content-type, accept, authorization");
headers.append("Access-Control-Allow-Credentials", "true");
headers.append("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS, HEAD");



headers.append('Content-Type', 'application/x-www-form-urlencoded');

let options = new RequestOptions({ headers: headers });


 //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 



let body = "login="+login+"&email="+email;
console.log(body);



return this.http.put('http://localhost:8089/motdepassoublier',body ,options)
         .map((response: Response) => {
            
             if(response.json())
             return true;

             return false;


});}





}