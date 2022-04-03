import { DateTime } from 'luxon';

/**
* @param {string} currentTime - ISO format date
* @return {string} nextHarvest - ISO format date
*/
export const nextHarvest = (currentTime) => {
    const currentDT = DateTime.fromISO(currentTime);
    const thisMonthSundayDT = currentDT.startOf('month').startOf('week').set({'weekday': 7});
    
    if (currentDT < thisMonthSundayDT) {
        return thisMonthSundayDT.toISODate();
    }

    const nextMonthSundayDT = currentDT.plus({'month': 1}).startOf('month').startOf('week').set({'weekday': 7});
    return nextMonthSundayDT.toISODate();
}