import { fetchApi } from './api';
import type { LeagueId } from './leagues';

export type LeagueSeasonBadge = {
  strSeason: string;
  strBadge: string | null;
};

export type LeagueBadgesResponse = {
  seasons: LeagueSeasonBadge[] | null;
};

export const leagueBadgeEndpoint = (id: LeagueId) =>
  `/search_all_seasons.php?id=${id}&badge=1`;

export const fetchLeagueBadge = async (id: LeagueId) => {
  try {
    const response = await fetchApi(leagueBadgeEndpoint(id));
    const { seasons } = (await response.json()) as LeagueBadgesResponse;

    return seasons?.[seasons.length - 1] ?? null;
  } catch {
    return null;
  }
};
