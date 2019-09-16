import { Injectable } from '@angular/core';
import Actor from './actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActordataService {
  
  actorData:Actor[];

  constructor() { 
    this.actorData=[
      {name: 'EGG',quantity:'zumbai',rate:8.0},
      {name: 'Bread',quantity:'Mumbai',rate:9.0},
      {name: 'Milk',quantity:'Chennai',rate:10.0}
    ];
  }
  getActors(){
    return this.actorData;
  }
  addActor(actor:Actor){
    this.actorData.push(actor);
  }
  deleteActor(index:number){
    this.actorData.splice(index,1);
  }
  updateActor(index:number,newActorData:Actor){
    this.actorData.splice(index,1,newActorData);
  }
}
