import { config } from '@/config';

import { type ErrorCode, FetchFailedError } from './apiError';

export const fetchApi = async (path: string) => {
  let response!: Response;
  const apiUrl = config.api;

  try {
    response = await fetch(`${apiUrl}${path}`, {
      headers: new Headers({
        Accept: 'application/json',
      }),
      mode: 'cors',
    });
  } catch {
    throw new FetchFailedError('Fetch request failed', 500);
  }

  if (response.ok) {
    return response;
  }

  throw new FetchFailedError(
    'Fetch request failed',
    response.status as ErrorCode,
    {
      endpoint: `${apiUrl}${path}`,
    }
  );
};
