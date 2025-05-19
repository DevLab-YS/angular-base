import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterModule, CommonModule],
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'arqmemos';

    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('en');

        const browserLang = this.translate.getBrowserLang() || 'en';
        this.translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    }
}
