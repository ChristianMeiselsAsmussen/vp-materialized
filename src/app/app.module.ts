import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, MetaReducer } from '@ngrx/store';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// containers
import { NavigationComponent } from './containers/navigation/navigation.component';
import { SignupComponent } from './containers/signup/signup.component';

// components
import { effects } from './app.effects';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { reducers, metaReducers } from './store';
import { MeetingsComponent } from './containers/meetings/meetings.component';

// services
import { MeetingService } from './services/meeting.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupComponent,
    SignupFormComponent,
    MeetingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // NG Material
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([effects])
  ],
  exports: [
  ],
  providers: [MeetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
