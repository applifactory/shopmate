import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Product } from '@core/models';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.pug',
  styleUrls: ['./product-list-item.component.sass'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ 
        transform: 'scale(1) translate(0,0)',
        opacity: '1'
      })),
      transition(':enter', [
        style({ 
          transform: 'scale(0.9) translate(0,-10px)',
          opacity: '0'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ 
          transform: 'scale(0.9) translate(0,-10px)',
          opacity: '0'
        }))
      ])
    ])
  ]
})
export class ProductListItemComponent implements OnInit {

  @Input()
  public product: Product;

  @HostBinding('@EnterLeave')
  public fadeInOut: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
