import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
  import { from } from 'rxjs';
  import { ActivatedRoute} from '@angular/router';
  import {HeroService} from '../hero.service';
  import {Location} from '@angular/common';
@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {
  constructor(
    private route:ActivatedRoute,
    private heroservice:HeroService,
    private local:Location
  
  ) { }
  listheroes:Hero;
  addhero:Hero[];
  checkadd=true;
  giatri=+ this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.getidhero();
    
  }

  update(): void {
    this.heroservice.updatehero(this.listheroes)
      .subscribe(() => this.goBack());
  }

  getidhero():void{
    const id=+ this.route.snapshot.paramMap.get('id');

    if(id)
    {
      this.heroservice.getHero(id).subscribe(Hero=>this.listheroes=Hero)
    }
    
    
  }
  goBack(): void {
    this.local.back();
  }
  add(name: string,male:string): void {
    name = name.trim();
    male=male.trim();
    if (!name || !male) { return; }
    this.heroservice.addHero({ name,male } as Hero)
    .subscribe(() => this.goBack());
  }
  
}
