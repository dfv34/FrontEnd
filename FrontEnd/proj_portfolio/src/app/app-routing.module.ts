import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditHysComponent } from './components/hys/edit-hys/edit-hys.component';
import { NewHysComponent } from './components/hys/new-hys/new-hys.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto/new-proyecto.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NewEducacionComponent},
  { path: 'editedu/:id', component: EditEducacionComponent},
  { path: 'nuevahab', component: NewHysComponent},
  { path: 'edithys/:id', component: EditHysComponent},
  { path: 'nuevoproy', component: NewProyectoComponent },
  { path: 'editproy/:id', component: EditProyectoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
