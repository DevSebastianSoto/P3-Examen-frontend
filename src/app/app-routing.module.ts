import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrabajadoresComponent } from './views/trabajadores/trabajadores.component';

const routes: Routes = [{ path: '', component: TrabajadoresComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
