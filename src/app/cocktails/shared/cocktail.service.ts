import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private url = environment.cocktailAPI;
  constructor(private http: HttpClient) {}
  getRandomCocktail(): Observable<any> {
    return this.http.get<any>(
      `${this.url}/json/v1/1/random.php`,
    );
  }
}
