import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import { from } from 'rxjs';
import {MessageService} from '../message.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private herosiviec:HeroService,
    private local :Location
    ) { }
  listhero:Hero[];
selectedHero: Hero;
  ngOnInit(): void {
    this.getHeroes();
  }
  onselectetd(hero:Hero):void{
this.selectedHero=hero;
  }
 
  getHeroes(): void {
    this.herosiviec.getheroes()
        .subscribe(heroes => this.listhero = heroes);
  }
  delete(hero: Hero): void {
    this.listhero = this.listhero.filter(h => h !== hero);
    this.herosiviec.deleteHero(hero).subscribe();
  }
  goBack(): void {
    this.local.back();
  }
}