import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { RegistrarComponent } from './usuarios/registrar/registrar.component';
import { UsuarioService } from './shared/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
