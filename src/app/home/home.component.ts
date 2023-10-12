import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  log()
  {
  this.route.navigate(["/log"])
  }
  emplog()
  {
  this.route.navigate(["/emplogin"])
  }
  
}
