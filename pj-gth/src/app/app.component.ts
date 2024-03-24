import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from './shared/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pj-gth';

  constructor(
    public service: UsuarioService,
    private fb: FormBuilder,
    private rota: Router
  ) {}
  ngOnInit(): void {
    debugger
   
    };
  }

