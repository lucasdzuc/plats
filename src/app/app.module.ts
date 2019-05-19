import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, routing } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PlataformaComponent } from './plataforma/plataforma.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ServicosComponent,
    ContatoComponent,
    LoginComponent,
    CadastroComponent,
    PlataformaComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
