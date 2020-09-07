import { Component, OnInit } from '@angular/core';
import questions from '../../../assets/questions.js';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service.js';
import { Question } from 'src/app/models/question.js';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  public categories = ['CSS', 'HTML', 'Javascript'];
  public allQuestions: any[] = [];
  public sliderValues = [0, 0, 0];
  public selectedQuestions: Question[] = [];
  public isQuizActive: boolean = false;
  public filteredQuestions: any[] = [];
  public showMenu: boolean = false;
  public filterByCategory: any[] = [];
  public questionsToSend: any[] = [];

  constructor(private router: Router, public quizService: QuizService) { }

  ngOnInit(): void {
    this.allQuestions = questions;
  }

  select(choice: string, index: number) {
    this.questionsToSend = [];
    this.selectedQuestions = [];
    this.showMenu = true;
    this.filteredQuestions = [];
    this.filterByCategory = [];
    let diffNum = this.sliderValues[index];
    let diffLevel = diffNum <= 0.5 ? 'easy' : 'medium';
    this.selectedQuestions = this.allQuestions[choice].filter(ques => {
      return ques.difficulty == diffLevel
    });

    this.selectedQuestions.forEach(question => {
      let idx = this.filteredQuestions.findIndex(category => category.category == question.category);
      if(idx == -1) {
        this.filteredQuestions.push({category: question.category, selected: false});
      }
    });
  }

  inputChange(category) {
    let idx = this.filteredQuestions.findIndex(question => question.category == category.category);
    let cat = this.filteredQuestions[idx].selected;
    if(cat === false) {
      this.filteredQuestions[idx].selected = true;
      this.filterByCategory.push(category.category);
    } else {
      this.filteredQuestions[idx].selected = false;
      this.filterByCategory.splice(this.filterByCategory.indexOf(category.category), 1);
    }
    let finalQuestions;
    if(this.filterByCategory.length == 0) {
      finalQuestions = this.selectedQuestions;
    } else {
      finalQuestions = this.selectedQuestions.filter(question =>{
        for(let i = 0; i < this.filterByCategory.length; i++) {
          if(question.category == this.filterByCategory[i]) return true;
        }
      });
    }
    this.questionsToSend = finalQuestions;
  }
  
  submitQuiz(){
    if(this.questionsToSend.length == 0){
      this.questionsToSend = this.selectedQuestions;
    };
    this.isQuizActive = true;
    this.sliderEvent();
  }

  onGenerateQuiz(){
    this.router.navigate(['/generate-quiz']);
  }

  onCreateQuiz(){
    this.router.navigate(['/create-quiz']);
  }

  sliderEvent() {
    this.filterByCategory = [];
    this.filteredQuestions = [];
    this.showMenu = false;
  }
  
  cancelQuiz(event){
    this.isQuizActive = event;
    this.selectedQuestions = [];
    this.questionsToSend = [];
    this.sliderEvent();
  }
}
