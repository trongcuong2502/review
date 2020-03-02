import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-Dasboard',
  templateUrl: './Dasboard.component.html',
  styleUrls: [ './Dasboard.component.css' ]
})
export class DasboardComponent implements OnInit {
  listdash: Hero[] = [];

  constructor(private heroService: HeroService,
    private local :Location
    ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getheroes()
      .subscribe(heroes => this.listdash = heroes);
  }
  goBack(): void {
    this.local.back();
  }
}