import { isHarvest } from './isHarvest';
import { DateTime } from 'luxon';

describe('isHarvest', () => {
    it('should return true if today is a harvest', () => {
        const targetDate = '2022-04-03';
        expect(isHarvest(targetDate)).toEqual(true);
    })

    it('should return false if today is a harvest', () => {
        const targetDate = '2022-04-02';
        expect(isHarvest(targetDate)).toEqual(false);
    })
});