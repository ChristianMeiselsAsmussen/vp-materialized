import { Component, OnInit, Input } from '@angular/core';
import { Party } from '../../models/signup.models';

@Component({
  selector: 'app-signup-form',
  template: `
    <form #form="ngForm" novalidate >
      <mat-form-field>
        <input matInput name="name" placeholder="Give me a break" [ngModel]="party.name">
      </mat-form-field>
      <mat-radio-group>
        <mat-radio-button *ngFor="let answer of answers" [value]="answer">{{answer}}</mat-radio-button>
      </mat-radio-group>
    </form>
  `,
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  @Input()
  party: Party;
  answers: string[];
  constructor() {
    this.answers = ['ja', 'nej'];
  }

  ngOnInit() {
  }

}
