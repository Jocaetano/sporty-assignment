import { fetchApi } from './api';

export type SportId = string & { _: string };

export type Sport = {
  idSport: SportId;
  strSport: string;
  strFormat: 'TeamvsTeam' | 'EventSport';
  strSportThumb: string;
  strSportThumbBW: string;
  strSportIconGreen: string;
  strSportDescription: string;
};

type AllSports = {
  sports: Sport[];
};

export const sportsEndpoint = '/all_sports.php';

export const fetchAllSports = async () => {
  try {
    const response = await fetchApi(sportsEndpoint);
    const { sports } = (await response.json()) as AllSports;

    return sports;
  } catch {
    return [];
  }
};
