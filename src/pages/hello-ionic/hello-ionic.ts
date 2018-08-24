import { Component } from '@angular/core';

import { MenuPage } from '../menu/menu';
import { OrderDetailsPage } from '../order-details/order-details';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  menuPage = MenuPage;
  orderDetailsPage = OrderDetailsPage;
  constructor() {

  }
}
