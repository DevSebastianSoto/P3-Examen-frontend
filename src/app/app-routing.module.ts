import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiposActivoComponent } from './views/tipos-activo/tipos-activo.component';
import { TrabajadoresComponent } from './views/trabajadores/trabajadores.component';

const routes: Routes = [
  { path: '', component: TrabajadoresComponent },
  { path: 'tipos-activo', component: TiposActivoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
