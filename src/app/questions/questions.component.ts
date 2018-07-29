import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
   questions = [];
   access_token: string;
  

  constructor(private auth: AuthService, private dataService: DataService) { }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz() {    
    this.dataService.getquiz(). 
        subscribe(data => {
          this.questions=data
          });
        
  }
  
}
