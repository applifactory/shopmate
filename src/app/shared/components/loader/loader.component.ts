import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.pug',
  styleUrls: ['./loader.component.sass'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ opacity: '1' })),
      transition(':enter', [
        style({ opacity: '0' }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ opacity: '0' }))
      ])
    ])
  ]
})
export class LoaderComponent implements OnInit {

  @HostBinding('@EnterLeave')
  public fadeInOut: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
