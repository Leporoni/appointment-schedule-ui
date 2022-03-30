import { Injectable } from '@angular/core';
import { Region } from '../model/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor() { }

  listRegions(): Region[] {
    return[
      {id: 1, region: "Sudeste", total_exams: 5000}
    ];
  }
}
