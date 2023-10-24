import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ILanguage } from './models/languages';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'widget';
  language: ILanguage[] | undefined;
  selectedLang: ILanguage | undefined;
  langform!: FormGroup;



  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    this.translateService.use(environment.defaultLocale);
  }
  ngOnInit(): void {
    this.language = [
      { name: 'English', code: 'en' },
      { name: 'Русский', code: 'ru' },

    ];
    this.langform = new FormGroup({
      languages: new FormControl<ILanguage | null>(null)
    });

    this.translateService.get(['Home', 'Widget'])
      .subscribe(translations => {
        console.log(translations['Home'])
        console.log(translations['Widget'])
      });
  }
  ngAfterViewInit(): void {
    this.langform?.controls['languages'].valueChanges.subscribe((x) => {
      this.translateService.use(x.code)
    });
  }

}


