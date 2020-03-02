import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DasboardComponent} from './dasboard/dasboard.component';
import {AddlistComponent} from './addlist/addlist.component'
  import { from } from 'rxjs';
const routes: Routes=[
  {
    path:'hero',component:HeroesComponent
  },
  {path :'dasboard',component:DasboardComponent},
  {path:'hero/:id',component:AddlistComponent}
  ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class RoutingModule { }
