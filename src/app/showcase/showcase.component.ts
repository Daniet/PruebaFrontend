import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service'

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.sass']
})
export class ShowcaseComponent implements OnInit {

  products = []

  constructor(
    private dataService:DataService
  ) {
    console.log('Inicio de componente')
  }

  ngOnInit() {
    this.products = this.dataService.getProducts()
  }

}
