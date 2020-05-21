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
    ReviewQuestionsComponent
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
