import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const hero = [
      { id: 11, name: 'lê thị hòa' ,male:'Nam'},
      { id: 12, name: 'trịnh thị ánh',male:'Nữ' },
      { id: 13, name: 'văn thị ngọc trâm',male:'Nam' }
    ];
    return {hero};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}