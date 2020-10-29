import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { TrabajadorListComponent } from './views/trabajadores/trabajador-list/trabajador-list.component';
import { TrabajadorService } from './service/trabajador.service';
import { TrabajadoresComponent } from './views/trabajadores/trabajadores.component';

import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from './blocks/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { TiposActivoComponent } from './views/tipos-activo/tipos-activo.component';
import { TiposActivoService } from './service/tipos-activo.service';
import { TiposActivoListComponent } from './views/tipos-activo/tipos-activo-list/tipos-activo-list.component';
import { ActivosFisicosComponent } from './views/activos-fisicos/activos-fisicos.component';
import { ActivosFisicosListComponent } from './views/activos-fisicos/activos-fisicos-list/activos-fisicos-list.component';
import { ActivosFisicosService } from './service/activos-fisicos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TrabajadoresComponent,
    TrabajadorListComponent,
    TiposActivoListComponent,
    TiposActivoComponent,
    ActivosFisicosComponent,
    ActivosFisicosListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [TrabajadorService, ActivosFisicosService, TiposActivoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
