import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from 'src/app/models/types';
import { ListingService } from 'src/app/services/listing/listing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public listings: Listing[] = [];

  constructor(private listingService: ListingService, private router: Router) { }

  ngOnInit(): void {
    this.listings = this.listingService.getListings();
  }

  navigateToListing() {
    this.router.navigate(['/listing']);
  }
}
