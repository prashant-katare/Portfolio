import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
})
export class HeaderComponent implements OnInit {

    ham:string = "topnav";

    myFunction() {
      if (this.ham === "topnav") {
        this.ham = "responsive";
      } else {
        this.ham = "topnav";
      }
    }
  
    ngOnInit(): void {
    }
} 