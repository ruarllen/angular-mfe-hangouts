import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
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
   // const randomInteger: number = parseInt(`${(Math.random() * 100)}`, 10);
  /*  timer(3000)
      .subscribe(() => {
        this.eventService.pub<number>("item-change", { content: randomInteger, sender: 'mfe-b' });
      });*/
  }
  title = 'mfe-app-a';

  sugestiveId = 1;


  select(number:number){
    this.sugestiveId = number
    this.eventService.pub<number>("item-change", { content: number, sender: 'mfe-b' });
  }
}
