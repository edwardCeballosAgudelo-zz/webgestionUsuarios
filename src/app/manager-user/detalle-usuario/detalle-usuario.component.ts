import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit {

  public usuario: Usuario = { _id: '', Nombre: '', Apellido: '', Documento: '',  Peso: 0 };
  public isLoadingResults = false;

  constructor(private route: ActivatedRoute, private usuarioServiceService: UsuarioServiceService, private router: Router) { }

  ngOnInit() {
    this.getUsuerDetails(this.route.snapshot.params.documento);
  }

  getUsuerDetails(documento: string) {
    this.usuarioServiceService.getUserByDocument(documento)
      .subscribe((data: any) => {
        this.usuario = data;
        this.isLoadingResults = false;
      });
  }

  deleteUser(documento: any) {
    Swal.fire({
      title: 'Estas Seguro de eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'SI, Eliminar!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.usuarioServiceService.deleteUser(documento)
        .subscribe(res => {
            Swal.fire('Usuario eliminado', 'success');
            this.router.navigate(['/']);
          }, (err) => {
            Swal.fire('Oops...', err, 'error');
          }
        );
      }
    });
  }

}
