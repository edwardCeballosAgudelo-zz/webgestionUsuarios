import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioServiceService } from '../services/usuario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.scss']
})
export class ActualizarUsuarioComponent implements OnInit {

  public form: FormGroup;
  public _id: string;
  public Nombre: string;
  public Apellido: string;
  public Documento: string;
  public Peso: number;

  public isLoadingResults = false;
  public matcher = new ErrorStateMatcher();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuarioServiceService: UsuarioServiceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getUserByDocumento(this.route.snapshot.params.documento);
    this.form = this.formBuilder.group({
      Nombre: [null, Validators.required],
      Apellido: [null, Validators.required],
      Peso: [null],
      Documento: [null, Validators.required]
    });
  }

  public getUserByDocumento(documento: any) {
    this.usuarioServiceService.getUserByDocument(documento).subscribe((data: any) => {
      this.Documento = data.Documento;
      this.form.setValue({
        Nombre: data.Nombre,
        Apellido: data.Apellido,
        Documento: data.Documento,
        Peso: data.Peso
      });
    });
  }

  public onFormSubmit() {
    this.isLoadingResults = true;
    this.usuarioServiceService.updateUser(this.Documento, this.form.value)
      .subscribe((res: any) => {
        const doc = res.Documento;
        this.isLoadingResults = false;
        Swal.fire('Usuario actualizado', 'success');
        this.router.navigate(['/detailuser', doc]);
      }, (err: any) => {
        Swal.fire('Oops...', err, 'error');
        this.isLoadingResults = false;
      }
      );
  }

  public userDetails() {
    this.router.navigate(['/detailuser', this.Documento]);
  }
}
