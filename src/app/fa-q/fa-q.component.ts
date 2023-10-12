import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fa-q',
  templateUrl: './fa-q.component.html',
  styleUrls: ['./fa-q.component.css']
})
export class FaQComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let answers = document.querySelectorAll(".accordion");
    answers.forEach((event) => {
    event.addEventListener("click", () => {
      if (event.classList.contains("active")) {
      event.classList.remove("active");
      } else {
      event.classList.add("active");
      }
    });
    });
    
      }}
