import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { Subscription } from 'rxjs';
import { EventBusService, Events } from './shared/services/event-bus.service';
import { SHOW_LOADING_SPINNER, HIDE_LOADING_SPINNER } from './constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Photo board';
  eventbusSub: Subscription;

  constructor(private spinner: NgxSpinnerService, private eventBus: EventBusService) {
    this.eventbusSub = this.eventBus.on(Events.ShowLoadingSpinner, (msg: string) => {
      switch (msg) {
        case SHOW_LOADING_SPINNER:
          this.spinner.show();
          break;
        case HIDE_LOADING_SPINNER:
          this.spinner.hide();
          break;
      }
    })
  }
}
