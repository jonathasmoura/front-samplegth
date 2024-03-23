import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { RegistrarComponent } from './usuarios/registrar/registrar.component';
import { TodosUsuariosComponent } from './usuarios/todos-usuarios/todos-usuarios.component';

const routes: Routes = [
  // { path: '', redirectTo: '/usuarios/registrar', pathMatch: 'full' },
  {
    path: 'usuarios',
    component: UsuarioComponent,
    children: [
      { path: 'usuario', component: UsuarioComponent },      
    ],
  },
  {
    path:'usuarios',
    component: RegistrarComponent,
    children:[
      { path: 'registrar', component: RegistrarComponent },      
    ]
  },
  {
    path:'usuarios',
    component: TodosUsuariosComponent,
    children:[
      { path: 'todos-usuarios', component: TodosUsuariosComponent },      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
