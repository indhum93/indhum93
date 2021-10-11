import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CategorySelectionComponent } from './quiz/category-selection/category-selection.component';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { ResultComponent } from './quiz/result/result.component';

const routes: Routes = [ 
  {
    path:'',
    component:CategorySelectionComponent,
  },
  {
    path:'quiz/:page',
    component:QuizComponent,
    canActivate:[AuthGuard]   
  },
  {
    path:'result',
    component:ResultComponent,
    canActivate:[AuthGuard]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
