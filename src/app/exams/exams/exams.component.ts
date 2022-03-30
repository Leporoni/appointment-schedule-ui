import { Component, OnInit } from '@angular/core';
import { AgeGroup } from '../model/agegroup';
import { Incidence } from '../model/incidences';

import { Region } from '../model/region';
import { AgeGroupService } from '../service/agegroup.service';
import { IncidenceService } from '../service/incidence.service';
import { RegionService } from '../service/region.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  regions: Region[] = [];
  incidences: Incidence[] = [];
  agegroup: AgeGroup[] = [];

  constructor(
    private regionService: RegionService,
    private ageGroupService: AgeGroupService,
    private incidencesService: IncidenceService
  ) { }

  ngOnInit(): void {
    this.regions = this.regionService.listRegions();
    this.incidences = this.incidencesService.listIncidences();
    this.agegroup = this.ageGroupService.listAgeGroup();
  }

}
