import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private fb: FormBuilder) {}

  formModel = this.fb.group({
    Nome: ['', Validators.required],
    SobreNome: ['', Validators.required],
    Email: ['', Validators.required],
    CPFCNPJ: ['', Validators.required],
    Endereco: ['', Validators.required],
    Senhas: this.fb.group({
      Senha: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmarSenha: ['', Validators.required],
    }),
    Admin: [''],
  });
}
