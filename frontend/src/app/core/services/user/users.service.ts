import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { User, UserRanking } from '../../models/user';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<User[]> {
    return of([
      {
        displayName: 'aa',
        email: 'aa@aa.aa',
        elo: 1300,
        battles: [],
        characters: [],
      },
      {
        displayName: 'bb',
        email: 'bb@bb.bb',
        elo: 1400,
        battles: [],
        characters: [],
      },
      {
        displayName: 'cc',
        email: 'cc@cc.cc',
        elo: 1550,
        battles: [],
        characters: [],
      },
      {
        displayName: 'dd',
        email: 'dd@dd.dd',
        elo: 2100,
        battles: [],
        characters: [],
      },
      {
        displayName: 'ee',
        email: 'ee@ee.ee',
        elo: 1800,
        battles: [],
        characters: [],
      },
    ] as User[]);
  }

  findOne(email: string): Observable<User> {
    return of({
      displayName: 'aa',
      email: 'aa@aa.aa',
      elo: 1300,
      battles: [],
      characters: [],
    } as User);
  }

  getRankings(): Observable<UserRanking[]> {
    return of([
      {
        displayName: 'dd',
        email: 'dd@dd.dd',
        elo: 2100,
        battles: {
          won: 12,
          lost: 6,
          fought: 18
        }
      },
      {
        displayName: 'ee',
        email: 'ee@ee.ee',
        elo: 1800,
        battles: {
          won: 12,
          lost: 6,
          fought: 18
        }
      },
      {
        displayName: 'cc',
        email: 'cc@cc.cc',
        elo: 1550,
        battles: {
          won: 12,
          lost: 6,
          fought: 18
        }
      },
      {
        displayName: 'bb',
        email: 'bb@bb.bb',
        elo: 1400,
        battles: {
          won: 12,
          lost: 6,
          fought: 18
        }
      },
      {
        displayName: 'aa',
        email: 'aa@aa.aa',
        elo: 1300,
        battles: {
          won: 12,
          lost: 6,
          fought: 18
        }
      },
    ] as UserRanking[]);
  }
}
