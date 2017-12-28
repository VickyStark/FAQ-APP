import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/Question';
import { log } from 'util';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions:object[];
  constructor(public dataservice:DataService) { 
   
  }

  ngOnInit() {
    this.questions=this.dataservice.getquestion();
  }
  addQuestion(question:Question){
    this.dataservice.addQuestion(question)
  }
}
