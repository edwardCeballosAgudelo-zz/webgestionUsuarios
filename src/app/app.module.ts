import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line: max-line-length
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatSliderModule, MatSlideToggleModule, MatButtonToggleModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './core/pipes/pipes.module';
import { MenuComponent } from './menu/menu.component';
import { ManagerUserModule } from './manager-user/manager-user.module';
import { ManagerUserComponent } from './manager-user/manager-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ManagerUserComponent
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
    PipesModule,
    MatToolbarModule,
    ManagerUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
