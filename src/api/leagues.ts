import { fetchApi } from './api';

export type LeagueId = string & { _: string };

export type League = {
  idLeague: LeagueId;
  strLeague: string;
  strSport: string;
};

type AllLeagues = {
  leagues: League[];
};

export type LeagueLookup = League & {
  strLeagueAlternate: string;
  strLogo: string;
};

export type LeagueLookupResponse = {
  leagues: [LeagueLookup] | null;
};

export const leaguesEndpoint = '/all_leagues.php';
export const leagueLookupEndpoint = (id: LeagueId) =>
  `/lookupleague.php?id=${id}`;

export const fetchAllLeagues = async () => {
  try {
    const response = await fetchApi(leaguesEndpoint);
    const { leagues } = (await response.json()) as AllLeagues;

    return leagues;
  } catch {
    return [];
  }
};

export const fetchLeagueLookup = async (id: LeagueId) => {
  try {
    const response = await fetchApi(leagueLookupEndpoint(id));
    const { leagues } = (await response.json()) as LeagueLookupResponse;

    return leagues?.[0] ?? null;
  } catch {
    return null;
  }
};
