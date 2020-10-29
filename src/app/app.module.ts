import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataTablesModule } from 'angular-datatables';

import { SidebarComponent } from './blocks/sidebar/sidebar.component';
import { NavbarComponent } from './blocks/navbar/navbar.component';
import { LinkComponent } from './blocks/sidebar/link/link.component';
import { TrabajadoresViewComponent } from './views/trabajadores-view/trabajadores-view.component';
import { TrabajadorListComponent } from './views/trabajadores-view/trabajador-list/trabajador-list.component';
import { TrabajadorDetailComponent } from './views/trabajadores-view/trabajador-detail/trabajador-detail.component';
import { TrabajadorService } from './service/trabajador.service';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    NavbarComponent,
    SidebarComponent,
    TrabajadorListComponent,
    TrabajadoresViewComponent,
    TrabajadorDetailComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [TrabajadorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
