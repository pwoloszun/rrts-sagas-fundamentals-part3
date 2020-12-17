import { delayedValue } from 'src/utils/randoms';
import { CounterValue, CounterValueParams } from '../counter-api';

const DELAY_IN_MS = 200;

export function getCounterValue(id: number): Promise<CounterValue> {
  return delayedValue({ id, value: 0 }, DELAY_IN_MS);
}

export function updateCounterValue(id: number, params: CounterValueParams): Promise<CounterValue> {
  return delayedValue({ id, ...params }, DELAY_IN_MS);
}
