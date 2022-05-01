import { render, screen } from '@testing-library/react';
import {DateTime} from 'luxon';
import {HarvestCountdown} from './HarvestCountdown';

test('shows text for next Potato Harvest', () => {
  render(<HarvestCountdown now={DateTime.local(2022, 4, 1, 9, 0)} />);
  const linkElement = screen.getByText(/Time until next Potato Harvest/i);
  expect(linkElement).toBeInTheDocument();
});

test('shows text for next Potato Harvest in multple days', () => {
  render(<HarvestCountdown now={DateTime.local(2022, 3, 30, 9, 0)} />);
  const linkElement = screen.getByText(/days/i);
  expect(linkElement).toBeInTheDocument();
});

test('shows text for next Potato Harvest in between two to one days', () => {
  render(<HarvestCountdown now={DateTime.local(2022, 4, 1, 9, 0)} />);
  const linkElement = screen.queryByText(/days/i);
  expect(linkElement).not.toBeInTheDocument();
});

test('shows text for next Potato Harvest in less than one day', () => {
  render(<HarvestCountdown now={DateTime.local(2022, 4, 2, 9, 0)} />);
  const linkElementDay = screen.getByText(/days/i);
  expect(linkElementDay).toBeInTheDocument();
});

test('shows text for currently in Potato Harvest', () => {
  render(<HarvestCountdown now={DateTime.local(2022, 4, 3, 0, 0)} />);
  const linkElement = screen.getByText(/IT'S HARVEST DAY!!! 🥔/i);
  expect(linkElement).toBeInTheDocument();
});
