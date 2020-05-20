import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  public val;
  public isQuizActive: boolean = false;
}
