import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  public displayedColumns: string[] = ['Nombre', 'Apellido', 'Documento', 'Peso'];
  public data: Usuario[] = [];
  public isLoadingResults = false;

  constructor(
    private usuarioServiceService: UsuarioServiceService,
    private router: Router
    ) {
    this.getUsers();
  }

  ngOnInit() {
  }

  public getUsers() {
    this.isLoadingResults = true;
    this.usuarioServiceService.getUsers().subscribe((res: any) => {
      this.data = res;
      this.isLoadingResults = false;
    }, err => {
      this.isLoadingResults = false;
    });
  }

  public adduser() {
    this.router.navigate(['adduser']);
  }
}
