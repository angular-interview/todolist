import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private themeService: NbThemeService) {
  }

  default () {
    this.themeService.changeTheme('default');
  }

  dark () {
    this.themeService.changeTheme('dark');
  }

  corporate () {
    this.themeService.changeTheme('corporate');
  }

  cosmic () {
    this.themeService.changeTheme('cosmic');
  }
}
