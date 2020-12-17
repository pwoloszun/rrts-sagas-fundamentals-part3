import axios from 'axios';
import { delayedValue } from 'src/utils/randoms';

const BASE_URL = `/api/counter-values`;
const DELAY_IN_MS = 1200;

export interface CounterValue {
  id: number;
  value: number;
};

export type CounterValueParams = Omit<CounterValue, 'id'>;

export function getCounterValue(id: number): Promise<CounterValue> {
  const url = `${BASE_URL}/${id}`
  return axios.get(url)
    .then((response) => response.data)
    .then((cunterValue) => delayedValue(cunterValue, DELAY_IN_MS));
}

export function updateCounterValue(id: number, params: CounterValueParams): Promise<CounterValue> {
  const url = `${BASE_URL}/${id}`
  return axios.put(url, params)
    .then((response) => response.data)
    .then((cunterValue) => delayedValue(cunterValue, DELAY_IN_MS));
}
