import axios from 'axios';

import { delayedValue } from 'src/utils/randoms';
import getApiUrl from './get-api-url';

const DEFAULT_DELAY_IN_MS = 1200;

interface Entity {
  id: number;
}

export default function createEntityApi<T extends Entity, TParams = Omit<T, 'id'>>(
  baseUrl: string,
  delayInMs = DEFAULT_DELAY_IN_MS
) {
  const apiDefaultUrl = getApiUrl(`${baseUrl}`);

  return {
    getAll(): Promise<T[]> {
      return axios.get(apiDefaultUrl)
        .then((response) => response.data)
        .then((entities) => delayedValue(entities, DEFAULT_DELAY_IN_MS));
    },

    create(params: TParams): Promise<T> {
      return axios.post(apiDefaultUrl, params)
        .then((response) => response.data)
        .then((entity) => delayedValue(entity, DEFAULT_DELAY_IN_MS));
    },

    getById(id: number): Promise<T> {
      const url = getApiUrl(`${baseUrl}/${id}`);
      return axios.get(url)
        .then((response) => response.data)
        .then((entity) => delayedValue(entity, DEFAULT_DELAY_IN_MS));
    },

    update(id: number, params: TParams): Promise<T> {
      const url = getApiUrl(`${baseUrl}/${id}`);
      return axios.put(url, params)
        .then((response) => response.data)
        .then((entity) => delayedValue(entity, DEFAULT_DELAY_IN_MS));
    },

    remove(id: number): Promise<number> {
      const url = getApiUrl(`${baseUrl}/${id}`);
      return axios.delete(url)
        .then((response) => response.data)
        .then(() => delayedValue(id, DEFAULT_DELAY_IN_MS));
    },
  };
}
