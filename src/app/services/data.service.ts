import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    console.log('Inicio de servicio')
  }

  getProducts(){
    return [{
      url_img: '/assets/images/p4.png',
      name_product: 'Sandalias de Cuero y Tachas Saville Row',
      price: 40000,
      size: 'xs',
      brand: 'Straadivaruois & Zara',
      seller_img: '/assets/images/profile.png',
      collection: 'Home Juntos'
    },{
      url_img: '/assets/images/p3.png',
      name_product: 'Sandalias de Cuero y Tachas Saville Row',
      price: 40000,
      size: 'xs',
      brand: 'Straadivaruois & Zara',
      seller_img: '/assets/images/profile.png',
      collection: 'Home Juntos'
    },{
      url_img: '/assets/images/p1.png',
      name_product: 'Sandalias de Cuero y Tachas Saville Row',
      price: 40000,
      size: 'xs',
      brand: 'Straadivaruois & Zara',
      seller_img: '/assets/images/profile.png',
      collection: 'Home Juntos'
    },{
      url_img: '/assets/images/p2.png',
      name_product: 'Sandalias de Cuero y Tachas Saville Row',
      price: 40000,
      size: 'xs',
      brand: 'Straadivaruois & Zara',
      seller_img: '/assets/images/profile.png',
      collection: 'Home Juntos'
    },{
      url_img: '/assets/images/p6.png',
      name_product: 'Sandalias de Cuero y Tachas Saville Row',
      price: 40000,
      size: 'xs',
      brand: 'Straadivaruois & Zara',
      seller_img: '/assets/images/profile.png',
      collection: 'Home Juntos'
    },{
      url_img: '/assets/images/p5.png',
      name_product: 'Sandalias de Cuero y Tachas Saville Row',
      price: 40000,
      size: 'xs',
      brand: 'Straadivaruois & Zara',
      seller_img: '/assets/images/profile.png',
      collection: 'Home Juntos'
    }]
  }

}
