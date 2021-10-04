import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { AnalysisResult } from 'src/app/core/models/analysis';

@Injectable()
export class AnalysisService {
  constructor(private http: HttpClient) {}

  analyse(): Observable<AnalysisResult[]> {
    return of([
      {
        type: 'warning',
        message: 'Variable name "titi_toto" must be in camel case.'
      },
      {
        type: 'error',
        message: 'Variable name "titi_toto" must be in camel case.'
      },
      {
        type: 'warning',
        message: 'Variable name "titi_toto" must be in camel case.'
      },
      {
        type: 'error',
        message: 'Variable name "titi_toto" must be in camel case.'
      },
      {
        type: 'warning',
        message: 'Variable name "titi_toto" must be in camel case.'
      },
    ]);
  }

}
