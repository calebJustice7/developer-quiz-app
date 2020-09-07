import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDefaultsModule } from './modules/app-defaults/app-defaults.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { StatsComponent } from './components/stats/stats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import { ReviewQuestionsComponent } from './components/review-questions/review-questions.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GenerateQuizComponent } from './components/generate-quiz/generate-quiz.component';
import { CommunityQuizzesComponent } from './components/community-quizzes/community-quizzes.component';
import { CustomQuizComponent } from './components/custom-quiz/custom-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NavBarComponent,
    QuizzesComponent,
    StatsComponent,
    FooterComponent,
    QuizComponent,
    QuizResultsComponent,
    ReviewQuestionsComponent,
    SettingsComponent,
    GenerateQuizComponent,
    CommunityQuizzesComponent,
    CustomQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppDefaultsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
