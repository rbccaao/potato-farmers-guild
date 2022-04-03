import { nextHarvest } from './nextHarvest';
import { DateTime } from 'luxon';

describe('nextHarvest before the Sunday has passed', () => {
    it('should get the first Sunday of April 2022', () => {
        const targetDate = '2022-04-03';
        const givenDate = '2022-04-01';
        expect(nextHarvest(givenDate)).toEqual(targetDate);
    })
});

describe('nextHarvest after the Sunday has passed', () => {
    it('should get the first Sunday of May 2022', () => {
        const targetDate = '2022-05-01';
        const givenDate = '2022-04-04';
        expect(nextHarvest(givenDate)).toEqual(targetDate);
    })
});