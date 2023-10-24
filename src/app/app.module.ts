import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengcomponentsModule } from './shared/primengcomponents/primengcomponents.module';
import { WidgetComponent } from './components/widget/widget.component';
import { DragAndDropManagerDirective } from './shared/directives/drag-and-drop-manager.directive';

import { HttpClientModule } from '@angular/common/http';
import { ResizableModule } from 'angular-resizable-element';
import { ResizibleDirective } from './shared/directives/resizible.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MockdatatableComponent } from './components/mockdatatable/mockdatatable.component';
import { ZoneswithcamsComponent } from './components/zoneswithcams/zoneswithcams.component';



@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    DragAndDropManagerDirective,
    ResizibleDirective,
    MockdatatableComponent, 
    ZoneswithcamsComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengcomponentsModule,
    HttpClientModule,
    ResizableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
