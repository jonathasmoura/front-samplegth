import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styles: [],
})
export class RegistrarComponent {
  formIncludeRegister: FormGroup = new FormGroup({
    nome: new FormControl(''),
    sobreNome: new FormControl<string>(''),
    email: new FormControl(''),
    cpfcnpj: new FormControl(''),
    endereco: new FormControl(''),
    senha: new FormControl(''),
    confirmaSenha: new FormControl(''),
    admin: new FormControl(false),
  });

  constructor(
    public service: UsuarioService,
    private fb: FormBuilder,
    private rota: Router
  ) {}

  ngOnInit(): void {
    this.formIncludeRegister = this.fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      sobreNome: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      cpfcnpj: ['', Validators.required],
      endereco: ['', Validators.required],
      senha: ['', Validators.required],
      confirmaSenha: ['', Validators.required],
      admin: [false, ''],
    });
  }

  registrar(): void {
    debugger;
    // this.user = this.formIncludeRegister.value;

    if (this.formIncludeRegister.valid) {
      this.service
        .registrarUsuario(this.formIncludeRegister.value)
        .subscribe((res) => {
          if (res.status == 'success') {
            console.log(res.toString());
            this.resetForm();
            this.rota.navigateByUrl('usuarios/todosusuarios');
          }
        });
    }
  }

  resetForm() {
    this.formIncludeRegister.reset();
  }
}
