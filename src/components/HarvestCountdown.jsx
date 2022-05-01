import { nextHarvest } from '../util/nextHarvest';
import { isHarvest } from '../util/isHarvest';


function NextHarvest(props){
  const now = props.now;
  const nextHarvestDate = nextHarvest(now);
  const daysDiff = nextHarvestDate.diff(now, ['days', 'hours', 'minutes', 'seconds']);

  return (
    <div>
      <h1>Time until next Potato Harvest</h1>
      <table style={{width: '50%', tableLayout: 'fixed', marginLeft: 'auto', marginRight: 'auto'}}>
      <thead>
          <td>{daysDiff.days === 1 ? "day" : "days"}</td>
          <td>hours</td>
          <td>minutes</td>
          <td>seconds</td>
        </thead>
        <tbody>
          <td>{numberFormatter(daysDiff.days)}</td>
          <td>{numberFormatter(daysDiff.hours)}</td>
          <td>{numberFormatter(daysDiff.minutes)}</td>
          <td>{numberFormatter(Math.round(daysDiff.seconds))}</td>
        </tbody>
      </table>
      <h2>Next Potato Harvest date is: </h2>
      <p>{nextHarvestDate.toISODate()}</p>
    </div>
  );
}

function numberFormatter (number) {
  return number.toString().padStart(2, '0');
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

  return isHarvestDay ? <TodayHarvest /> : <NextHarvest now={now}/>
}
