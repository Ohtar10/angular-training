import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // For when we want to provide navigation outside this component
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(`Received profile request for user id: ${id}`);
    
    // For when we want to provide navigation within the same component
    this.route.paramMap
      .subscribe(params => {
          let id = +params.get('id');
          console.log(`Received profile request for user id: ${id}`);
      });
  }

}
