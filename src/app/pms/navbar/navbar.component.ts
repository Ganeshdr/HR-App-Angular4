import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authentication: AuthenticationService
  ) { }

  ngOnInit() {
  }
  logout():any {
    this.authentication.logout();
  }
}
