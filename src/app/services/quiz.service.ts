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

  // either returns array of questions with filters, or returns length of array with filters

  getPossibleNumOfQuestions(difficulties, languages, lengthBool?) {
    let questionsArr = questions;
    let selected = [...questionsArr.CSS, ...questionsArr.HTML, ...questionsArr.Javascript];
    selected = selected.filter(ques => {
      for (let i = 0; i < difficulties.length; i++) {
        if (difficulties[i] == ques.difficulty) return true;
      }
    })
    selected = selected.filter(ques => {
      for (let i = 0; i < languages.length; i++) {
        if (languages[i].toLowerCase() == ques.questionCategory) return true;
      }
    })
    if (lengthBool) {
      return selected.length;
    } else {
      return selected;
    }
  }

  // generates questions depending on if they include duplicates or not

  generateQuestions(quizName, numOfQuestions, difficulties, languages, userName, includeDuplicates) {
    let customQuiz = {
      createdBy: userName,
      quizName: quizName,
      questions: [],
      difficulties: difficulties,
      languages: languages,
      hasDuplicates: includeDuplicates ? 'Yes' : 'No'
    };

    let selected: any = this.getPossibleNumOfQuestions(difficulties, languages);
    let maxQuestions = 0;

    if(includeDuplicates){
      while (maxQuestions < numOfQuestions) {
        let randNum = Math.floor(Math.random() * selected.length);
        customQuiz.questions.push(selected[randNum]);
        maxQuestions++;
      }
    } else {
      let arr = [];
      while(maxQuestions < numOfQuestions) {
        let randNum = Math.floor(Math.random() * selected.length);
        let idx = arr.indexOf(selected[randNum]);
        if(idx == -1){
          arr.push(selected[randNum]);
          maxQuestions++;
        } 
      };
      customQuiz.questions = arr;
    }
    return customQuiz;
  }
}
