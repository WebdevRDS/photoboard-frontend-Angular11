import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotoBoardComponent} from './components/photo-board/photo-board.component';

const routes: Routes = [
  {path: '', component: PhotoBoardComponent, canActivate: []},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
