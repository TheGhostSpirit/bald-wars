import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AnalysisService } from 'src/app/core/services/analysis/analysis.service';

import { AnalysisResult } from 'src/app/core/models/analysis';

@Component({
  selector: 'app-user-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.less'],
})
export class UserCodeComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  content = 'for(let i = 0; i < 3; i++) {\nconsole.log(i);\n}';

  hasAnalysed = false;
  analysis: AnalysisResult[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private analysisService: AnalysisService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  analyse() {
    this.analysisService.analyse().subscribe(
      res => {
        this.analysis = res;
        this.hasAnalysed = true;
      }
    );
  }

  canSubmit(): boolean {
    return !this.form.invalid;
  }
}
