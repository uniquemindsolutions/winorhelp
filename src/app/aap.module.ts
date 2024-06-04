import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, NgbCollapseModule ],
    declarations: [  HeaderComponent ],
    bootstrap:    [  ]
  })
  export class AppModule { }