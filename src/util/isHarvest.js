import { DateTime } from 'luxon';

/**
* @param {string} currentTime - ISO format date
* @return {Boolean} isHarvest
*/
export const isHarvest = (currentTime) => {
    const currentDT = DateTime.fromISO(currentTime);
    const thisMonthSundayDT = currentDT.startOf('month').startOf('week').set({'weekday': 7});
    return currentDT.hasSame(thisMonthSundayDT, 'day');
}