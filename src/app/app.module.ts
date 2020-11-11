import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line: max-line-length
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatSliderModule, MatSlideToggleModule, MatButtonToggleModule, MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AdicionarUsuarioComponent } from './adicionar-usuario/adicionar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { PipesModule } from './core/pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    AdicionarUsuarioComponent,
    DetalleUsuarioComponent,
    ActualizarUsuarioComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
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
    BrowserAnimationsModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
