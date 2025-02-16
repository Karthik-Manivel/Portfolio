import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class ProductsComponent {
  products = [
    { name: 'iPhone 15', description: 'The latest iPhone with advanced features', price: '$999' },
    { name: 'Galaxy S23', description: 'Samsung\'s flagship device', price: '$899' },
    { name: 'Pixel 8', description: 'Google\'s latest Pixel smartphone', price: '$799' },
    { name: 'OnePlus 11', description: 'Fast charging and premium design', price: '$699' },
    { name: 'Oppo Reno 8', description: 'Sleek design with great cameras', price: '$599' },
    { name: 'Xiaomi 13', description: 'Powerful smartphone with MIUI', price: '$549' }
  ];
}
