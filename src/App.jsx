import './App.css';
import {DateTime} from 'luxon';
import {HarvestCountdown} from '../components/HarvestCountdown';

function App() {
  const currentDateTime = DateTime.now();

  return (
    <div className="App">
      <header className="App-header">
       <HarvestCountdown now={currentDateTime} />
      </header>
    </div>
  );
}

export default App;