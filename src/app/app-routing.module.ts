import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivosFisicosComponent } from './views/activos-fisicos/activos-fisicos.component';
import { TiposActivoComponent } from './views/tipos-activo/tipos-activo.component';
import { TrabajadoresComponent } from './views/trabajadores/trabajadores.component';

const routes: Routes = [
  { path: '', component: TrabajadoresComponent },
  { path: 'tipos-activo', component: TiposActivoComponent },
  { path: 'activos-fisicos', component: ActivosFisicosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
