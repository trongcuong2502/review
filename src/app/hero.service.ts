import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {observable, Observable, of,interval} from 'rxjs';
import { from } from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient,HttpHeaders, HttpClientModule} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';
import { log } from 'util';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private checkadd=true;
private heroesUrl='api/hero';
  constructor(
    private messageservice:MessageService,
    private http:HttpClient
    ) { }
  getheroes(): Observable<Hero[]>{
    this.messageservice.add('thông báo: đã tải')
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('lỗi fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`lỗi tải fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
updatehero(hero:Hero):Observable<any>{
return this.http.put(this.heroesUrl,hero,httpOptions)
.pipe(tap(_ =>this.log('update hero id =${hero.id}')
), catchError(this.handleError<any>('updateHero')))
}

  private log(message:string){
    this.messageservice.add('herroservice:${message}');
  }
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); 
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}
/** POST: add a new hero to the server */
addHero (hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
    tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    catchError(this.handleError<Hero>('addHero'))
  );
}
/** DELETE: delete the hero from the server */
deleteHero (hero: Hero | number): Observable<Hero> {
  const id = typeof hero === 'number' ? hero : hero.id;
  const url = `${this.heroesUrl}/${id}`;

  return this.http.delete<Hero>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );
}

searchHeroes(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found heroes matching "${term}"`)),
    catchError(this.handleError<Hero[]>('searchHeroes', []))
  );
}
}
