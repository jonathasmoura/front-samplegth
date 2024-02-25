import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styles: [],
})
export class RegistrarComponent implements OnInit {
  constructor(public service: UsuarioService) {}
  ngOnInit(): void {}
}
