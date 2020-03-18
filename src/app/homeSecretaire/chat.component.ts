import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import {chatDemoData} from "./chat.demo";
import * as _ from 'lodash';

import * as moment from 'moment';
import { fadeInAnimation } from "app/homeAdmin/route.animation";
import { PerfectScrollbarComponent } from "angular2-perfect-scrollbar/dist";
import { UserService } from "app/_services";
import { Acteur } from "app/_models";
import { Discussion } from "app/_models/discussion";



@Component({
  selector: 'ms-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.scss'],
  host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class ChatComponent implements OnInit {

x : string = "assets/img/avatars/13.png";
a :any[]=[];

  chats: any[]=[];
  activeChat: any = {};
  newMessage: string;
 
id : number;
idenvoie:number=0;

messages: Discussion[]=[];
  @ViewChild('chatScroll') private chatScroll: PerfectScrollbarComponent;

  constructor(  private userService: UserService   ) {
 let currentUser = JSON.parse(localStorage.getItem('currentUser'));
 this.id=currentUser.id_user;


   }

  ngOnInit() {




this.userService.demarage(this.id)
.subscribe(  result => {  this.messages=result[0];
          
                       let z : any []=[];
                       z=result[1]; 
                      this.idenvoie=z[0];   
          
      this.userService.getActeurs()
       .subscribe(  acteurs =>  {
               
               for(let i = 0; i < acteurs.length; i++)
               {
            
              if( acteurs[i].id_user!=this.id  )     
                {let x : Acteur=new Acteur();
                 x= acteurs[i];
                this.chats.push(x);
                if( acteurs[i].id_user==this.idenvoie  )
                  {
this.activeChat.nom= acteurs[i].nom+" "+acteurs[i].prenom;
this.activeChat.profession= acteurs[i].profession;
                  }
                
                
                }     

               }
       }
        )

 //  this.getdiscussion (this.id,10);
 //   this.idenvoie=10;
  })
        
      
    
console.log("aaaaa");
   
  //  this.activeChat = this.a[0];
   setTimeout(() => {
     this.chatScroll.elementRef.nativeElement.scrollTop = this.chatScroll.elementRef.nativeElement.scrollHeight;
   }, 0);

  }

getdiscussion( id: number, id1:number    )

{
 this.userService.discussion(id,id1)
      .subscribe( result => {     
        this.messages=[];
         this.messages=result;    
     
           }   )

}


  setActiveChat(chat) {
console.log("aaaaa");

console.log(chat);
this.getdiscussion(this.id,chat.id_user);
this.idenvoie=chat.id_user;
   // this.activeChat = chat;
this.activeChat.nom= chat.nom+" "+chat.prenom;
this.activeChat.profession= chat.profession;

  }

  send() {
    if (this.newMessage) {
     
this.userService.envoie(this.id,this.idenvoie,this.newMessage )
.subscribe( result => {  if(result){
this.getdiscussion(this.id,this.idenvoie);



}     }    )

      this.newMessage = '';
    }
  }

  clearMessages(activeChat) {
    activeChat.messages.length = 0;
  }
}
