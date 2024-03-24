import { Injectable, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { UsuarioModel } from './models/usuario-model.model';
import { JsonPipe } from '@angular/common';
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

  todosUsuarios(): Observable<any> {
    return this.httpClient
      .get(this.BaseURI + 'todosusuarios')
      .pipe(catchError(this.errorHandler));
  }

  usuarioPorId(id: number): Observable<any> {
    return this.httpClient
      .get(this.BaseURI + 'obterusuario/' + id)
      .pipe(catchError(this.errorHandler));
  }

  editarUsuario(id: number, usuario: UsuarioModel): Observable<any> {
    const httpOpt = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.httpClient
      .put(
        this.BaseURI + 'editardadosusuario' + id,
        JSON.stringify(usuario),
        httpOpt
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id: number) {
    const httpOpt = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.httpClient
      .delete(this.BaseURI + '/posts/' + id, httpOpt)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
