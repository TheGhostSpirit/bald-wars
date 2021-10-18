import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AnalysisService } from 'src/app/core/services/analysis/analysis.service';
import { CharactersService } from 'src/app/core/services/character/characters.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

import { AnalysisResult } from 'src/app/core/models/analysis';
import { Character } from 'src/app/core/models/character';

@Component({
  selector: 'app-user-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.less'],
})
export class UserCodeComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  character: Character;

  hasAnalysed = false;
  analysis: AnalysisResult[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private analysisService: AnalysisService,
    private charactersService: CharactersService,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.charactersService.findOneOfUser(
      this.auth.email,
      id
    ).subscribe(character => {
      this.character = character as Character;
      this.form = this.formBuilder.group({
        name: [character?.name, Validators.required],
      });
    });
  }

  analyse() {
    this.analysisService.analyse(this.auth.email, this.character.id).subscribe(
      res => {
        this.analysis = res;
        this.hasAnalysed = true;
      }
    );
  }

  canSubmit(): boolean {
    return !this.form.invalid;
  }

  submit() {
    this.character.name = this.form.controls.name.value;
    this.charactersService.update(
      this.auth.email,
      this.character
    ).subscribe();
  }
}
