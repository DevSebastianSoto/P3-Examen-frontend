import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrabajadoresViewComponent } from './views/trabajadores-view/trabajadores-view.component';

const routes: Routes = [{ path: '', component: TrabajadoresViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
