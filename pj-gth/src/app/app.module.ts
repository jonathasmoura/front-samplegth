import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { RegistrarComponent } from './usuarios/registrar/registrar.component';
import { UsuarioService } from './shared/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosUsuariosComponent } from './usuarios/todos-usuarios/todos-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RegistrarComponent,
    TodosUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
