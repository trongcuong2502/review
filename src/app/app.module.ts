import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { config, from } from 'rxjs';
import { HeroesComponent } from './heroes/heroes.component';
import { AddlistComponent } from './addlist/addlist.component';
import {FormsModule} from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { RoutingModule } from './routing.module';
import { DasboardComponent } from './dasboard/dasboard.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    AddlistComponent,
    MessageComponent,
    DasboardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
      

  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
