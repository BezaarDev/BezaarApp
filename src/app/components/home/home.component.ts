import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/models/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public listings: Listing[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listings = [
      {
        username: 'Amelia M',
        title: 'Navajo jewelry',
        description: 'Modern and vintage Navajo jewelry, retired collector and vendor collection for sale.',
        category: 'Jewelry',
        location: 'San Francisco'
      },
      {
        username: 'Hershey F',
        title: 'Washer and Dryer',
        description: 'We just moved into a new house without a washer and dryer.',
        category: 'Appliances',
        location: 'Austin'
      },
      {
        username: 'William H',
        title: 'Ps4 wanted',
        description: 'If anyone has a ps4 they are looking to get rid of or anything like that please contact me!',
        category: 'Video Games',
        location: 'Chicago'
      },
      {
        username: 'Amelia M',
        title: 'Navajo jewelry',
        description: 'Modern and vintage Navajo jewelry, retired collector and vendor collection for sale.',
        category: 'Jewelry',
        location: 'Dallas'
      },
      {
        username: 'Hershey F',
        title: 'Washer and Dryer',
        description: 'We just moved into a new house without a washer and dryer.',
        category: 'Appliances',
        location: 'Houston'
      },
      {
        username: 'William H',
        title: 'Ps4 wanted',
        description: 'If anyone has a ps4 they are looking to get rid of or anything like that please contact me!',
        category: 'Video Games',
        location: 'San Antonio'
      }
    ]
  }
}
