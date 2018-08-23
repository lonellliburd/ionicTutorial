import { Component } from '@angular/core';

import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  menuPage = MenuPage;

  constructor() {

  }
}
