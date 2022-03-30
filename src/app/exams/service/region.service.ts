import { Injectable } from '@angular/core';
import { Region } from '../model/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor() { }

  listRegions(): Region[] {
    return[
      {id:1, region: "Norte", total_exams: 15},
      {id:2, region: "Nordeste", total_exams: 10},
      {id:2, region: "Sudeste", total_exams: 200},
      {id:2, region: "Sul", total_exams: 80},
      {id:2, region: "Centro-Oeste", total_exams: 8}
    ];
  }
}
