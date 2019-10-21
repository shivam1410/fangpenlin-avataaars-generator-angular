import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {AvatarComponent} from '../../projects/avatar/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatButtonModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      [
        { path: "", component: AppComponent}
      ]
    )
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
