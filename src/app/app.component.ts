import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProject';
  score: number = 100;
  name: string = "นาย ก นามสกุล ข";

  student:any = {
    name : "peter",
    studentId : "5921602868",
    weight :"80",
    height : "145",
  }

  studentList:any = [{
    studentId : "5921600211",
    name : "pibig",
    weight :"46",
    height : "168"
  },{
    studentId : "5921600333",
    name : "jin",
    weight :"46",
    height : "168"
  },{
    studentId : "5921602544",
    name : "aribaba",
    weight :"50",
    height : "175"

  }];

  constructor(){
  this.student.bmi = (this.student.weight/((this.student.height/100)*(this.student.height/100))).toFixed(2);
    this.studentList.map((object,index)=> {
      let obj:any = object;
      obj.bmi = object.weight/((object.height/100)*(object.height/100));
      return obj;
    })
    console.log(this.studentList);

  }
}
