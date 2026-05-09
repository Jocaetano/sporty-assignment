'use client';

import { useLeagueBadge } from '@/hooks/useLeagueBadge';
import { useLeagueLookup } from '@/hooks/useLeagueLookup';

import type { League as LeagueType, LeagueLookup } from '@/api/leagues';

import Badge from './Badge';

type LeagueProps = {
  league: LeagueType;
};

export default function League({ league }: LeagueProps) {
  const {
    data: lookup,
    error: lookupError,
    isLoading,
  } = useLeagueLookup(league.idLeague);

  const {
    triggerFetchBadge,
    data: badge,
    error: badgeError,
    isMutating: badgeLoading,
  } = useLeagueBadge(league.idLeague);

  return (
    <button
      type='button'
      onClick={triggerFetchBadge}
      className='group relative flex min-h-32 flex-col overflow-hidden rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-muted-foreground hover:shadow-lg hover:shadow-black/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'
    >
      <div className='flex flex-1 items-start justify-between gap-3'>
        <div className='flex-1 space-y-1'>
          <h3 className='text-balance font-semibold leading-tight text-card-foreground group-hover:text-primary transition-colors'>
            {league.strLeague}
          </h3>
          <LeagueAlternate
            lookup={lookup}
            isError={!!lookupError}
            isLoading={isLoading}
          />
        </div>

        <Badge
          badge={badge}
          alt={`${league.strLeague} ${badge?.strSeason} badge`}
          badgeError={!!badgeError}
          badgeLoading={badgeLoading}
        />
      </div>

      <div className='mt-3 flex items-center gap-2'>
        <span className='inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary'>
          {league.strSport}
        </span>

        {!badge && !badgeLoading && !badgeError && (
          <span className='text-xs text-muted-foreground'>
            Click to load badge
          </span>
        )}
      </div>
    </button>
  );
}

type LeagueAlternateProps = {
  lookup: LeagueLookup | null | undefined;
  isLoading: boolean;
  isError: boolean;
};

const LeagueAlternate = ({
  lookup,
  isLoading,
  isError,
}: LeagueAlternateProps) => {
  if (isLoading) {
    return <div className='h-4 w-24 animate-pulse rounded bg-muted' />;
  }

  if (isError || !lookup) {
    return (
      <p className='text-sm text-muted-foreground'>Unable to load details</p>
    );
  }

  if (!lookup.strLeagueAlternate) {
    return null;
  }

  return (
    <p className='text-sm text-muted-foreground'>{lookup.strLeagueAlternate}</p>
  );
};
