import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  year: number;
  month: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    this.year = +params.get('year');
    this.month = +params.get('month');
  }

  viewAll() {
    this.router.navigate(['/'])
  }

}
