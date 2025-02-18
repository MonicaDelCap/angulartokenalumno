import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(
    private _router:Router
  ){}

  ngOnInit(): void {
    if(!localStorage.getItem('authToken')){
      this._router.navigate(["/"]);
    }
  }
}
