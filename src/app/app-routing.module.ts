import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


