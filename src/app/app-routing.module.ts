import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PlataformaComponent } from './cadastro/cadastro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
 
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'plataforma', component: PlataformaComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}