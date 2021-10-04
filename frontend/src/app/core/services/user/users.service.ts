import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { User } from 'src/app/core/models/user';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<User[]> {
    return of([
      {
        displayName: 'dd',
        email: 'dd@dd.dd',
        elo: 2100,
        ranking: 1,
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
        ranking: 2,
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
        ranking: 3,
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
        ranking: 4,
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
        ranking: 5,
        battles: {
          won: 12,
          lost: 6,
          fought: 18
        }
      },
    ] as User[]).pipe(delay(2000));
  }

  findOne(email: string): Observable<User> {
    return of({
      displayName: 'aa',
      email: 'aa@aa.aa',
      elo: 1300,
      ranking: 5,
      battles: {
        won: 12,
        lost: 6,
        fought: 18
      }
    } as User).pipe(delay(2000));
  }

}
