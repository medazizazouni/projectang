import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/classes/region';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
region : Region[]=[
  new Region("tunis","assets/region/tunis.jpg"),
  new Region("hammamet","assets/region/hammamet.jpg"),
  new Region("bizerte","assets/region/bizerte.jpg"),
  new Region("nabeul","assets/region/nabeul.jpg"),
  new Region("sfax","assets/region/sfax.jpg"),
  new Region("gabes","assets/region/gabes.jpg"),
  new Region("sousse","assets/region/sousse.jpg"),
  new Region("touzer","assets/region/touzer.jpg"),
];
  constructor() { }

  ngOnInit(): void {
  }

}
