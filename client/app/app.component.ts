import { Component } from '@angular/core';
import { TimeService } from './services/time.service';

@Component({
  moduleId:  module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [TimeService]
})

export class AppComponent { }