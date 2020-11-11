import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { AdicionarUsuarioComponent } from './adicionar-usuario/adicionar-usuario.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
// tslint:disable-next-line: max-line-length
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatSliderModule, MatSlideToggleModule, MatButtonToggleModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { PipesModule } from '../core/pipes/pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListaUsuariosComponent,
    AdicionarUsuarioComponent,
    DetalleUsuarioComponent,
    ActualizarUsuarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,
    HttpClientModule,
    PipesModule,
    RouterModule
  ]
})
export class ManagerUserModule { }
