import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'quiz', component: QuestionsComponent, canActivate: [AuthGuard]}
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes)]
})
export class RoutingModule { }
