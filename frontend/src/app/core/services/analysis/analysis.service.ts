import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AnalysisResult } from 'src/app/core/models/analysis';

@Injectable()
export class AnalysisService {
  constructor(private http: HttpClient) {}

  analyse(email: string, characterId: number): Observable<AnalysisResult[]> {
    return this.http.get<{ errors: AnalysisResult[]}>(`/users/${email}/characters/${characterId}/analysis`)
      .pipe(
        map(err => err.errors)
      );
  }

}
