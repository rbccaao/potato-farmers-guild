import {DateTime} from 'luxon';
import { nextHarvest } from '../util/nextHarvest';
import { isHarvest } from '../util/isHarvest';


function NextHarvest(){
    const now = DateTime.now();
    const nextHarvestDate = nextHarvest(now.toISODate());
    const daysDiff = DateTime.fromISO(nextHarvestDate).diff(now, 'days');
  
    return (
      <div>
        <h1>Days until next Potato Harvest</h1>
        <p>{Math.round(daysDiff.days)}</p>
        <h2>Next Potato Harvest date is: </h2>
        <p>{nextHarvestDate}</p>
      </div>
    );
  }
  
  function TodayHarvest(){
    return (
      <div>
        <h1>IT'S HARVEST DAY!!! 🥔</h1>
      </div>
    );
  }
  
  export function HarvestCountdown(props){
    const now = props.now;
    const isHarvestDay = isHarvest(now.toISODate());
  
    return isHarvestDay ? <TodayHarvest /> : <NextHarvest/>
  }
  