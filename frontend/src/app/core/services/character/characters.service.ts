import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Character } from 'src/app/core/models/character';

@Injectable()
export class CharactersService {
  constructor(private http: HttpClient) {}

  findAllPublic() {
    return this.http.get<Character[]>('/characters');
  }

  findAllOfUser(email: string): Observable<Character[]> {
    return this.http.get<Character[]>(`/users/${email}/characters`);
  }

  findOneOfUser(email: string, characterId: number): Observable<Character | undefined> {
    return this.http.get<Character>(`/users/${email}/characters/${characterId}`);
  }

  create(email: string, character: Partial<Character>): Observable<unknown> {
    return this.http.post(`/users/${email}/characters`, {
      name: character.name,
      visibility: character.visibility,
      program: character.program
    });
  }

  update(email: string, character: Character): Observable<unknown> {
    return this.http.put(`/users/${email}/characters/${character.id}`, {
      name: character.name,
      visibility: character.visibility,
      program: character.program
    });
  }

  delete(email: string, characterId: number): Observable<unknown> {
    return this.http.delete(`/users/${email}/characters/${characterId}`);
  }
}
