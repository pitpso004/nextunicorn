import { Component, OnInit } from '@angular/core';
import { CoreTranslationService } from '@core/services/translation.service';
import { locale as en } from 'assets/i18n/en';
import { locale as th } from 'assets/i18n/th';
@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.scss']
})
export class MainAdminComponent implements OnInit {


  constructor(
    private _coreTranslationService: CoreTranslationService
    ) {
    this._coreTranslationService.translate(en, th)
  }

  ngOnInit(): void {
  }

}
