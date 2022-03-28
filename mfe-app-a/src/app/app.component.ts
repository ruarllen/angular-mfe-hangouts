import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EventHandlerService } from 'src/services/event.handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private eventService: EventHandlerService) { }

  ngOnInit(): void {
    this.eventService.sub("item-change")
      .subscribe(console.log);
  }

  title = 'mfe-app-a';


}
