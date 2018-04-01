// ./app/shared/shared.module.ts
import { NgModule } from '@angular/core';

import { MaxLengthDirective } from './length.directive';
import { FormDirective } from './form.directive';

@NgModule({
    declarations: [
        MaxLengthDirective,
        FormDirective
    ],
    exports: [
        MaxLengthDirective,
        FormDirective
    ]
})
export class SharedModule{}