import { Component, Input, OnInit } from '@angular/core';
import { Listing } from 'src/app/models/types';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  @Input() public listings: Listing[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
