import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  findOneOfUser(
    email: string,
    characterId: number
  ): Observable<Character | undefined> {
    return this.http.get<Character>(
      `/users/${email}/characters/${characterId}`
    ).pipe(
      map(character => {
        character.program = atob(character.program);
        return character;
      })
    );
  }

  create(email: string, character: Partial<Character>): Observable<unknown> {
    return this.http.post(`/users/${email}/characters`, {
      name: character.name,
      visibility: character.visibility,
      program:
        'aW1wb3J0IHsgQ29tYmF0QWN0aW9ucyB9IGZyb20gJ2NoYXJhY3Rlci1saWInOw0KDQpleHBvcnQgZGVmYXVsdCB7DQogIGRlZmVuc2U6IDAsDQogIG1lbGVlOiAwLA0KICByYW5nZWQ6IDAsDQogIHJhbmdlZE1heFJhbmdlOiAwLA0KICBtb3ZlbWVudDogMCwNCiAgaGVhbGluZ1BvdGVuY3k6IDAsDQogIGhlYWx0aDogMCwNCiAgdHVybihnYW1lLCBjaGFyYWN0ZXIpIHt9DQp9Ow0K',
    });
  }

  update(email: string, character: Character): Observable<unknown> {
    return this.http.put(`/users/${email}/characters/${character.id}`, {
      name: character.name,
      visibility: character.visibility,
      program: btoa(character.program),
    });
  }

  delete(email: string, characterId: number): Observable<unknown> {
    return this.http.delete(`/users/${email}/characters/${characterId}`);
  }
}
