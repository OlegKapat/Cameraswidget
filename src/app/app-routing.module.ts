import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WidgetComponent } from './components/widget/widget.component';
import { MockdatatableComponent } from './components/mockdatatable/mockdatatable.component';

const routes: Routes = [
  {path:"*",component:AppComponent},
  {path:"widget",component:WidgetComponent},
  {path:"mocktable",component:MockdatatableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
