import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainAppHeaderComponent } from './components/main/main-app-header/main-app-header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    standalone: true,
    imports: [RouterOutlet, MainAppHeaderComponent]
})
export class AppComponent {}
