import { Component, OnInit } from '@angular/core';

import { Region } from '../model/region';
import { RegionService } from '../service/region.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  regions: Region[] = [];

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.regions = this.regionService.listRegions();
  }

}
