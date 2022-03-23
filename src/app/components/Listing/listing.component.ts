import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/models/types';
import { ListingService } from 'src/app/services/listing/listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  public listings: Listing[] = [];

  constructor(private listingService: ListingService) { }

  ngOnInit(): void {
    this.listings = this.listingService.getListings();
    console.log(this.listings);
  }

}
