import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { StatsComponent } from './components/stats/stats.component';
import { AuthGuard } from './guards/auth.guard';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import { ReviewQuestionsComponent } from './components/review-questions/review-questions.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GenerateQuizComponent } from './components/generate-quiz/generate-quiz.component';
import { CommunityQuizzesComponent } from './components/community-quizzes/community-quizzes.component';
import { CustomQuizComponent } from './components/custom-quiz/custom-quiz.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'quizzes', component: QuizzesComponent, canActivate: [AuthGuard] },
  { path: 'stats/:userName', component: StatsComponent, canActivate: [AuthGuard] },
  { path: 'quiz-results', component: QuizResultsComponent, canActivate: [AuthGuard] },
  { path: 'review-questions/:id', component: ReviewQuestionsComponent, canActivate: [AuthGuard] },
  { path: 'settings/:userName', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'generate-quiz', component: GenerateQuizComponent, canActivate: [AuthGuard] },
  { path: 'community', component: CommunityQuizzesComponent, canActivate: [AuthGuard] },
  { path: 'create-quiz', component: CustomQuizComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
