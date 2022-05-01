import { nextHarvest } from './nextHarvest';
import { DateTime } from 'luxon';

describe('nextHarvest before the Sunday has passed', () => {
    it('should get the first Sunday of April 2022', () => {
        const targetDate = DateTime.local(2022, 4, 3);
        const givenDate = DateTime.local(2022, 4, 2);
        expect(nextHarvest(givenDate)).toEqual(targetDate);
    })
});

describe('nextHarvest after the Sunday has passed', () => {
    it('should get the first Sunday of May 2022', () => {
        const targetDate = DateTime.local(2022, 5, 1);
        const givenDate = DateTime.local(2022, 4, 4);
        expect(nextHarvest(givenDate)).toEqual(targetDate);
    })
});