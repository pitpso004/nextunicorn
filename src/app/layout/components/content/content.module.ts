import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';
import { TranslateModule } from '@ngx-translate/core';

import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
  declarations: [ContentComponent],
  imports: [RouterModule, CoreCommonModule, TranslateModule],
  exports: [ContentComponent]
})
export class ContentModule {}
