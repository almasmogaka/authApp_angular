import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { SurveyComponent } from './survey/survey.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './/routing.module';
import { DataService } from './data.service';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    SurveyComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,    
    HttpClientModule,    
    RoutingModule
  ],
  providers: [DataService, AuthGuard, AuthService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
