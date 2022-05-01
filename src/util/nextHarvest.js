// import { DateTime } from 'luxon';

/**
* @param {DateTime} currentDT - DateTime object
* @return {DateTime} nextHarvest - DateTime object
*/
export const nextHarvest = (currentDT) => {
    const thisMonthSundayDT = currentDT.startOf('month').startOf('week').set({'weekday': 7});
    
    if (currentDT < thisMonthSundayDT) {
        return thisMonthSundayDT;
    }

    const nextMonthSundayDT = currentDT.plus({'month': 1}).startOf('month').startOf('week').set({'weekday': 7});
    return nextMonthSundayDT;
}