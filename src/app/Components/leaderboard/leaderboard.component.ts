import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaderboardService } from 'src/app/Services/leaderboard.service';

@Component({
  selector: "app-leaderboard",
  templateUrl: "./leaderboard.component.html",
  styleUrls: ["./leaderboard.component.scss"],
})
export class LeaderboardComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: LeaderboardService
  ) {}
leaders : any = []
  ngOnInit(): void {
    this.searchService.searchCars().subscribe((res) => {
      if (res.body.length) {
        this.leaders = res.body;
        this.leaders.sort(function (a: any, b: any) {
          return a.value - b.value;
        });
        console.log(this.leaders);
      }
    });
    
    console.log(this.leaders);
  }
}
