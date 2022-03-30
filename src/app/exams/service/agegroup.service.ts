import { Injectable } from '@angular/core';
import { AgeGroup } from '../model/agegroup';

@Injectable({
    providedIn: 'root'
})
export class AgeGroupService {

    constructor() { }

    listAgeGroup(): AgeGroup[] {
        return [
            { id: 1, group_i: 0, group_n: 14, description: 'Até 14 anos' },
            { id: 2, group_i: 15, group_n: 19, description: 'Entre 15 e 19 anos' },
            { id: 3, group_i: 16, group_n: 20, description: 'Entre 15 e 19 anos' }
        ];
    }
}