import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCardComponent } from './components/book-card/book-card.component';

const routes: Routes = [
  {path:'books',  component: BookCardComponent},
  { path: '', component: BookCardComponent },
  { path: '', component: BookCardComponent, pathMatch: 'full' },
  { path: 'filter', component: BookCardComponent },
  { path: 'search', component: BookCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
