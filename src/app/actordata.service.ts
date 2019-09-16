import { Injectable } from '@angular/core';
import Actor from './actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActordataService {
  
  actorData:Actor[];

  constructor() { 
    this.actorData=[
      {name: 'Egg',quantity:'10',rate:8.0},
      {name: 'Bread',quantity:'12',rate:9.0},
      {name: 'Milk',quantity:'20',rate:10.0}
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
