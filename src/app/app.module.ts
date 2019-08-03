import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AvtaarComponent} from './avtaar/avtaar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainServices} from './services/main.services';
import {TopsServices} from './services/tops.services';
import {FaceServices} from './services/face.services';
import {ColorsServices} from './services/colors.services';
import {AccessoriesServices} from './services/accessories.services';
import {ClothesServices} from './services/clothes.services';
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

@NgModule({
  declarations: [
    AppComponent,
    AvtaarComponent
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
    MainServices,
    TopsServices,
    FaceServices,
    ColorsServices,
    AccessoriesServices,
    ClothesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
