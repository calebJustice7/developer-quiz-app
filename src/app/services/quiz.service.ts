import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import questions from '../../assets/questions.js';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  public val;
  public isQuizActive: boolean = false;

  getPossibleNumOfQuestions(difficulties, languages, lengthBool?){
    let questionsArr = questions;
    let selected = [...questionsArr.CSS, ...questionsArr.HTML, ...questionsArr.Javascript];
    selected = selected.filter(ques => {
      for(let i = 0; i < difficulties.length; i++) {
        if(difficulties[i] == ques.difficulty) return true;
      }
    })
    selected = selected.filter(ques => {
      for(let i = 0; i < languages.length; i++) {
        if(languages[i].toLowerCase() == ques.questionCategory) return true;
      }
    })
    if(lengthBool) {
      console.log(selected.length);
      return selected.length;
    } else {
      return selected;
    }
  }

  generateQuestions(quizName, numOfQuestions, difficulties, languages, userName){
    let customQuiz = {
      createdBy: userName,
      quizName: quizName,
      questions: [],
      difficulties: difficulties,
      languages: languages
    };
    
    let selected: any = this.getPossibleNumOfQuestions(difficulties, languages);

      let maxQuestions = 0;
      while(maxQuestions < numOfQuestions) {
        let randNum = Math.floor(Math.random() * selected.length);
        customQuiz.questions.push(selected[randNum]);
        maxQuestions++;
      } 
    return customQuiz;
  }
}
