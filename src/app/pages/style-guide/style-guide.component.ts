import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { StyleGuideComponent } from '@devlab-ys/angular-components';

@Component({
    selector: 'app-style-guide',
    standalone: true,
    imports: [FontAwesomeModule, TranslateModule, StyleGuideComponent],
    templateUrl: './style-guide.component.html'
})
export class StylesComponent {}
