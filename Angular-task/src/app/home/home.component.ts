import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // @Input('firstname')
  // name = 'Aasim';
  // age = 12;
  // siteUrl = window.location.href;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.age);
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // console.log(this.siteUrl);
  }
}
