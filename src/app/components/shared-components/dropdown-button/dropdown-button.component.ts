import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.scss']
})
export class DropdownButtonComponent implements OnInit {
  @Input() public categories: string[] | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
