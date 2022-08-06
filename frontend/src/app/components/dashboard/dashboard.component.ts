import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {

  }

  // #f4f7f2

  // #f4f4f4

  txt = `<p></p>`
  tiles: Tile[] = [
    { text: '20 Booked', cols: 1, rows: 1, color: '#8aa771' },
    { text: '20 Available', cols: 1, rows: 1, color: '#fcb806' },
    { text: '10 CheckIns', cols: 1, rows: 1, color: '#818283' },
    { text: '4 CheckOuts', cols: 1, rows: 1, color: '#647754' },
  ];

  bodys: Tile[] = [
    { text: 'Next Visits', cols: 1, rows: 1, color: '#f4f7f2' },
    { text: 'New Booking', cols: 3, rows: 1, color: '#f4f4f4' },
  ];

  // bookings: Tile[] = [
  //   { text: '', cols: 1, rows: 2, color: '#f4f7f2' },
  //   { text: '', cols: 3, rows: 2, color: '#f4f4f4' },
  // ];

  ngOnInit(): void {
  }

  logout(): void{
    this.userService.logout();
    this.router.navigate(['/', 'login']);
  }

}
