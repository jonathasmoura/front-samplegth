import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { RegistrarComponent } from './usuarios/registrar/registrar.component';

const routes: Routes = [
  { path: '', redirectTo: '/usuarios/registrar', pathMatch: 'full' },
  {
    path: 'usuarios',
    component: UsuarioComponent,
    children: [
      { path: 'usuario', component: UsuarioComponent },
      { path: 'registrar', component: RegistrarComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
