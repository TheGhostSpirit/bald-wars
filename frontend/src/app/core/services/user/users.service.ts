import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from 'src/app/core/models/user';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<User[]> {
    return this.http.get<User[]>('/users');
  }

  findOne(email: string): Observable<User | undefined> {
    return this.http.get<User | undefined>(`/users/${email}`);
  }

  create(email: string, displayName: string): Observable<User> {
    return this.http.post<User>('/users', {
      email,
      displayName
    });
  }

}
