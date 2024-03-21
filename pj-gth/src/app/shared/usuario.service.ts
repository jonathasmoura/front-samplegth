import { Injectable, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from './models/usuario-model.model';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService implements OnInit {
  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit(): void {}

  readonly BaseURI = 'https://localhost:7225/api/usuarios/';

  registrarUsuario(usuario: UsuarioModel): Observable<any> {
    debugger;
    const httpOpt = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    const body = JSON.stringify(usuario);
    return this.httpClient.post(
      this.BaseURI + 'registrarusuario',
      body,
      httpOpt
    );
  } 
}
