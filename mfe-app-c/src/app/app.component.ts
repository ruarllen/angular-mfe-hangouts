import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EventHandlerService } from 'src/services/event.handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private eventService: EventHandlerService, private cd: ChangeDetectorRef) { }
  items: number = 0;
  price: number = 0;
  total: number = 0;
  selected: number = 0;

  ngOnInit(): void {
    this.eventService.sub<number>("item-change")
      .subscribe(_ => {
        this.selected = _;

        if (_ == 1) {
          this.price = 0.99;
        }
        if (_ == 2) {
          this.price = 0.89;
        }
        if (_ == 3) {
          this.price = 1.99;
        }

        this.cd.detectChanges();

      });
  }

  orderItem() {
    if (this.selected != 0) {
      this.items++
      this.total = this.total + this.price
      this.cd.detectChanges();
    }
  }



}
