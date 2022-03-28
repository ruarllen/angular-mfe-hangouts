import { ChangeDetectionStrategy, Component, OnInit,  ChangeDetectorRef } from '@angular/core';
import { EventHandlerService } from 'src/services/event.handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private eventService: EventHandlerService, private cd:  ChangeDetectorRef) { }
  selected = 0;
  
  ngOnInit(): void {
    this.eventService.sub<number>("item-change")
      .subscribe(_=>{
        this.selected = _;
        this.cd.detectChanges();
        
      });
  }

  title = 'mfe-app-a';


}
