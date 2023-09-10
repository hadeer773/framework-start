import { StartFrameworkComponent } from './start-framework/start-framework.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"", redirectTo:'startframework',pathMatch:'full'},
  {path:'startframework' , component:StartFrameworkComponent, title:"Home" },
  {path :'contact' , component:ContactComponent,title:'Contact'},
  {path: 'portfolio', component:PortfolioComponent,title:"Portfolio"},
  {path:'about' ,component :AboutComponent,title:'About'},
  {path:'**', component:NotFoundComponent,title:"Not Found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
