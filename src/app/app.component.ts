import { Component } from '@angular/core';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { SignupComponent } from './containers/signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vp-materialized';
}
