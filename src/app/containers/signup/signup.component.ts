import { Component, OnInit, Output } from '@angular/core';
import { Party } from '../../models/signup.models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output()
  party: Party;
  constructor() {
    this.party = {
      name: 'Carlos',
      isGoing: false
    };
   }

  ngOnInit() {
  }

}
