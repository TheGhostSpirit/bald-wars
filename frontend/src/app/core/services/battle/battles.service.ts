import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Battle } from '../../models/battle';

@Injectable()
export class BattlesService {
  constructor(private http: HttpClient) {}

  find() {
    return this.http.get<Battle[]>('/battles');
  }

  launch(character1: number, character2: number) {
    return this.http.post<unknown>('/battles', {
      character1,
      character2
    });
  }

}
