import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  tinnhan:string[]=[];
  constructor() { }
  add(tin:string){
    this.tinnhan.push(tin);
  }
  clear(){
    this.tinnhan=[];
  }
 
}

