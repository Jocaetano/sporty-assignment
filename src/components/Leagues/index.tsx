'use client';

import { Suspense } from 'react';

import { useLeagues } from '@/hooks/useLeagues';
import { useSearch } from '@/hooks/useSearch';

import { useSportFilter } from '@/components/providers/SportFilterContext';

import League from './League';

export default function Leagues() {
  const { query } = useSearch();
  const { sportFilter } = useSportFilter();
  const { data, isLoading, isValidating } = useLeagues();

  const filteredLeagues = data
    .filter((league) =>
      league.strLeague.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    .filter(
      (league) =>
        sportFilter == null ||
        league.strSport.toLocaleLowerCase() === sportFilter.toLocaleLowerCase()
    );

  if (isLoading) {
    return (
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {Array.from({ length: 6 }).map((_, i) => (
          <LeagueCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (filteredLeagues.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className='relative'>
      {isValidating && (
        <div className='absolute -top-6 right-0'>
          <div className='flex items-center gap-2 text-xs text-muted-foreground'>
            <div className='h-2 w-2 animate-pulse rounded-full bg-primary' />
            Updating...
          </div>
        </div>
      )}

      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {filteredLeagues.map((league) => (
          <Suspense key={league.idLeague} fallback={<LeagueCardSkeleton />}>
            <League league={league} />
          </Suspense>
        ))}
      </div>

      <p className='mt-6 text-center text-sm text-muted-foreground'>
        Showing {filteredLeagues.length}{' '}
        {filteredLeagues.length === 1 ? 'league' : 'leagues'}
      </p>
    </div>
  );
}

export function LeagueCardSkeleton() {
  return <div className='h-32 animate-pulse rounded-xl bg-card' />;
}

function EmptyState() {
  return (
    <div className='flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 py-16'>
      <svg
        className='mb-4 h-12 w-12 text-muted-foreground'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        />
      </svg>
      <h3 className='mb-1 text-lg font-medium text-foreground'>
        No leagues found
      </h3>
      <p className='text-sm text-muted-foreground'>
        Try adjusting your search or filter
      </p>
    </div>
  );
}
