import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { StatsComponent } from './components/stats/stats.component';
import { AuthGuard } from './guards/auth.guard';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import { ReviewQuestionsComponent } from './components/review-questions/review-questions.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'quizzes', component: QuizzesComponent, canActivate: [AuthGuard] },
  { path: 'stats/:id', component: StatsComponent, canActivate: [AuthGuard] },
  { path: 'quiz-results', component: QuizResultsComponent, canActivate: [AuthGuard] },
  { path: 'review-questions/:id', component: ReviewQuestionsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
