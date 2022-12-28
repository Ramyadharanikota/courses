import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcourseComponent } from './formcourse/formcourse.component';
import { AddcourseComponent } from './addcourse/addcourse.component';



const routes: Routes = [
  {path:'course',component: FormcourseComponent},
  {path:'addcourse',component:AddcourseComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[FormcourseComponent]
