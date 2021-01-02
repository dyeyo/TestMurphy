import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { ListContactsComponent } from './componets/list-contacts/list-contacts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contactos', component: ListContactsComponent },
  { path: 'contacto/:id', component: ListContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
