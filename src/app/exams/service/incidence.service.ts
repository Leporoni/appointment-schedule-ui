import { Injectable } from '@angular/core';
import { Incidence } from '../model/incidences';

@Injectable({
    providedIn: 'root'
})
export class IncidenceService {

    constructor() { }

    listIncidences(): Incidence[] {
        return [
            { id: 1, region_id: 2, month: 5, group_id: 1, qtd_exams: 44 }
        ];
    }

}