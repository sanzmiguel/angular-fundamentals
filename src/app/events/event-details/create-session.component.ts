import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession, restrictedWords } from '../shared';

@Component({
  selector: 'events-create-session',
  templateUrl: './create-session.component.html',
  styles: [`
    em { float: right; color: #e05c65; padding-left: 10px; }
    .error input, .error select, .error textarea { background-color: #e3c3c5 }
    .error ::-webkit-input-placeholder { color: #999 }
    .error ::-moz-placeholder { color: #999 }
    .error :-moz-placeholder { color: #999 }
    .error :-ms-input-placeholder { color: #999 }
  `]
})
export class CreateSessionComponent implements OnInit {

  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();
  newSessionForm: FormGroup;

  ngOnInit() {
    this.newSessionForm = new FormGroup({
      name: new FormControl('', Validators.required),
      presenter: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      abstract: new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])])
    });
  }

  saveSession(formValues) {
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    };
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }

}

