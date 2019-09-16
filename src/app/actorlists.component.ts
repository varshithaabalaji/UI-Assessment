import { Component, OnInit } from '@angular/core';

import Actor from '../../model/actor.model';

import {ActordataService}from '../../services/actordata.service';

@Component({
  selector: 'app-actorlists',
  templateUrl: './actorlists.component.html',
  styleUrls: ['./actorlists.component.scss']
})
export class ActorlistsComponent implements OnInit {
  actorList:Actor[];
  newActor:Actor;
  selectedIndex:number;
  tempActor:Actor;
  tempActorList:Actor[];

  constructor(private actordataService:ActordataService) { }

  ngOnInit() {
    this.actorList=this.actordataService.getActors();
   

this.newActor={
  name:null,
  city:null,
  rating:null
};
this.tempActor=Object.assign({},this.newActor)
this.selectedIndex=-1;
this.tempActor=null;
// this.tempActorList=JSON.parse(JSON.stringify(this.actorList));
this.tempActorList=this.actorList.slice();
  }
  deleteActor(index){
    this.actorList.splice(index,1);
  }
  addActor(){
    this.actordataService.addActor(this.newActor)
    this.newActor ={
      name:null,
      city:null,
      rating:null
    };
  }
  editActor(index){
    //this.tempActor=JSON.parse(JSON.stringify(this.actorList[index]));
    // this.tempActor=Object.assign({},this.actorList[index]);
    this.selectedIndex=index;
    this.tempActor={
      name:this.actorList[index].name,
      city:this.actorList[index].city,
      rating:this.actorList[index].rating
    }
    
  }
  saveActor(){
    this.selectedIndex=-1;
  }
  cancelEdit(index){
    this.actordataService.updateActor(index,this.tempActor);
    this.selectedIndex=-1;
  }
  handleKey(event,index){
    if(event.key==='Escape'){
      this.cancelEdit(index);
    }
  }
  resetList(){
    this.actorList=this.tempActorList.slice();
  }
  //refactored

  sortList(property:string,direction:string){
    this.actorList.sort(
      (first,second) => {
        let result=0;
        // if(typeof first[property]==='string'){
        //   if(direction ==='ascending'){
            if(first[property]>second[property])
            result= 1;
            if(first[property]<second[property])
            result= -1;
            return(direction ==='ascending')?result: -result;
       } )}
    //       else{
    //         //descending
    //         if(first[property]>second[property])
    //         return -1;
    //         if(first[property]<second[property])
    //         return 1;

    //       }
    //     }
    //     else{
    //       if(direction==='ascending'){
    //         return first[property]-second[property];
    //       }
    //       else{
    //         return second[property]-first[property];
    //       }

    //     }
    //   }
    // )
  }
  // sortList(property,direction){
  //   this.actorList.sort(
  //     (first,second) => {
  //       if(typeof first[property]==='string'){
  //         if(direction ==='ascending'){
  //           if(first[property]>second[property])
  //           return 1;
  //           if(first[property]<second[property])
  //           return -1;
  //         }
  //         else{
  //           //descending
  //           if(first[property]>second[property])
  //           return -1;
  //           if(first[property]<second[property])
  //           return 1;

  //         }
  //       }
  //       else{
  //         if(direction==='ascending'){
  //           return first[property]-second[property];
  //         }
  //         else{
  //           return second[property]-first[property];
  //         }

  //       }
  //     }
  //   )
  // }

