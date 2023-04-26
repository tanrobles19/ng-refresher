import { RouterModule, Routes } from "@angular/router";
import { PersonsComponents } from "./persons/persons.components";
import { PersonInputComponent } from "./persons/person-input-component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: '', component: PersonsComponents},
  { path: 'input', component: PersonInputComponent}
];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
