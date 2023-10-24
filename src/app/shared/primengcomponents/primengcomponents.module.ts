import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { TreeSelectModule } from 'primeng/treeselect';
import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MissingTranslationService } from '../services/missiontransletion.sertvice';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PanelModule,
    TabViewModule,
    DragDropModule,
    ScrollPanelModule,
    DropdownModule,
    DividerModule,
    InputTextModule,
    TreeSelectModule,
    TableModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MissingTranslationService
      },
      useDefaultLang: false,
    })
  ],
  exports: [
    PanelModule,
    TabViewModule,
    DragDropModule,
    ScrollPanelModule,
    DropdownModule,
    DividerModule,
    InputTextModule,
    TreeSelectModule,
    TranslateModule,
    TableModule
  ]
})
export class PrimengcomponentsModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
