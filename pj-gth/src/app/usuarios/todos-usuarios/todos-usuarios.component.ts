import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/shared/models/usuario-model.model';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-todos-usuarios',
  templateUrl: './todos-usuarios.component.html',
  styles: [],
})
export class TodosUsuariosComponent implements OnInit {
  /**
   *
   */
  usuarios: UsuarioModel[] = [];
  constructor(public service: UsuarioService) {}

  ngOnInit(): void {
    debugger
    this.service.todosUsuarios().subscribe((dados: UsuarioModel[]) => {
      this.usuarios = dados;
      console.log(this.usuarios);
    });
  }

  deletarUsuario(id:number){
    this.service.delete(id).subscribe(res => {
         this.usuarios = this.usuarios.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
}
