import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Character } from '../../models/character';

@Injectable()
export class CharactersService {
  constructor(private http: HttpClient) {}

  find(email: string): Observable<Character[]> {
    return of([
      {
        name: 'toto',
      },
      {
        name: 'titi',
      },
      {
        name: 'tata',
      }
    ] as Character[]);
  }

  delete(email: string, characterName: string): Observable<void> {
    return of();
  }
}
