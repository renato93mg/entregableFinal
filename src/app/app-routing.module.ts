import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  {path:'',redirectTo:'/listado',pathMatch:'full'},
  {path:'listado',component:ListadoComponent},
  {path:'formulario',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

