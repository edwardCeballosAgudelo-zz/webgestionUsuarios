import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adicionar-usuario',
  templateUrl: './adicionar-usuario.component.html',
  styleUrls: ['./adicionar-usuario.component.scss']
})
export class AdicionarUsuarioComponent implements OnInit {

  public form: FormGroup;
  public nombre: string;
  public apellido: string;
  public peso: number;
  public documento: string;

  public isLoadingResults = false;
  public matcher = new ErrorStateMatcher();

  constructor(
    private router: Router,
    private usuarioServiceService: UsuarioServiceService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      Nombre: [null, Validators.required],
      Apellido: [null, Validators.required],
      Peso: [null],
      Documento: [null, Validators.required]
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.usuarioServiceService.addUser(this.form.value)
      .subscribe((res: any) => {
        const id = res._id;
        this.isLoadingResults = false;
        Swal.fire('Usuario agregado', 'success');
        this.router.navigate(['/']);
      }, (err: any) => {
        this.isLoadingResults = false;
        Swal.fire('Oops...', err, 'error');
      });
  }

}
