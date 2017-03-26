import { Component } from '@angular/core';
import { Meta } from "@angular/platform-browser";

@Component({
    selector: 'app',
    styleUrls: ['./app.scss'],
    templateUrl: './app.html',

})

export class AppComponent {

    constructor(private meta: Meta) {
    }

    ngOnInit() {
        this.meta.addTag({ property: 'og:title', content: 'Leto:Server(less)' })
        this.meta.addTag({ property: 'og:image', content: 'https://letojs.com/assets/leto.svg' })
    }
}
