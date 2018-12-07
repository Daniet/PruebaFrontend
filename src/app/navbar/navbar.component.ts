import { Component, OnInit } from '@angular/core';

declare var M:any

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})


export class NavbarComponent implements OnInit {

  btn_menu:any

  items_navbar = [
    'shop',
    'instagram',
    'closet room',
    'vendedoras',
    'blog'
  ]

  constructor() {}

  ngOnInit() {
    M.AutoInit();
  }
}
