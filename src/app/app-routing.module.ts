import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestCartasComponent } from './shared/components/test-cartas/test-cartas.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [{

  path: '',
  children: [
    {
      path: '', component: HomeComponent
    },
    {
      path: 'test-cartas', component: TestCartasComponent
    },
    {
      path: '**', redirectTo: ''
    }
  ]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
