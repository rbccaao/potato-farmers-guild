import { isHarvest } from './isHarvest';
import { DateTime } from 'luxon';

describe('isHarvest', () => {
    it('should return true if today is a harvest', () => {
        const targetDate = DateTime.local(2022, 4, 3);
        expect(isHarvest(targetDate)).toEqual(true);
    })

    it('should return false if today is a harvest', () => {
        const targetDate = DateTime.local(2022, 4, 2);
        expect(isHarvest(targetDate)).toEqual(false);
    })
});