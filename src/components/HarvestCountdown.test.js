import { render, screen } from '@testing-library/react';
import {DateTime} from 'luxon';
import {HarvestCountdown} from './HarvestCountdown';

test('shows text for next Potato Harvest', () => {
  render(<HarvestCountdown now={DateTime.fromISO('2022-04-01')} />);
  const linkElement = screen.getByText(/Days until next Potato Harvest/i);
  expect(linkElement).toBeInTheDocument();
});

test('shows text for currently in Potato Harvest', () => {
  render(<HarvestCountdown now={DateTime.fromISO('2022-04-03')} />);
  const linkElement = screen.getByText(/IT'S HARVEST DAY!!! 🥔/i);
  expect(linkElement).toBeInTheDocument();
});
