import { DateTime } from 'luxon';

/**
* @param {DateTime} currentDT - DateTime object
* @return {Boolean} isHarvest
*/
export const isHarvest = (currentDT) => {
    const thisMonthSundayDT = currentDT.startOf('month').startOf('week').set({'weekday': 7});
    return currentDT.hasSame(thisMonthSundayDT, 'day');
}