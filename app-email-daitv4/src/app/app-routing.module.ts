import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MyMessageComponent } from './main/my-message/my-message.component';
import { FolderComponent } from './main/my-message/folder/folder.component';
import { DetailsComponent } from './main/my-message/details/details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {
    path: 'email', component: MainComponent, children: [
      {
        path: 'mymessage', component: MyMessageComponent, children: [
          {
            path: ':folder', component: FolderComponent
          },
          { path: ':id', component: DetailsComponent, outlet: 'details' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
