import { Component, OnInit } from '@angular/core';
import { PriceModel } from 'src/app/models/PriceModel';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  prices:PriceModel[] = [];

  constructor(private priceService: PriceService) { }

  ngOnInit() {
    this.priceService.getPriceData().subscribe(data => {
      this.prices = data;
    });
  }
}