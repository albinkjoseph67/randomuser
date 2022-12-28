import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RandomuserComponent } from './randomuser/randomuser.component';

const routes: Routes = [

  {
    path:'' ,redirectTo:'/home/user' ,pathMatch:'full'
},
{
  path:'home/user', component:HomeComponent
},
{
  path:'randomuser/view', component:RandomuserComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
