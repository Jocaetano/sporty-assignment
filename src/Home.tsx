import { Suspense } from 'react';

import ErrorBoundary from '@/components/ErrorBoundary';
import Header from '@/components/Header';
import Leagues, { LeagueCardSkeleton } from '@/components/Leagues';
import SearchInput from '@/components/Search/SearchInput';
import SportFilter from '@/components/SportFilter';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <main className='flex-1 px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-8'>
            <h1 className='text-balance text-3xl font-bold tracking-tight sm:text-4xl'>
              Explore Leagues
            </h1>
            <p className='mt-2 text-muted-foreground'>
              Discover sports leagues from around the world
            </p>
          </div>

          <ErrorBoundary
            fallback={
              <div className='rounded-xl bg-card p-6 text-center text-muted-foreground'>
                Something went wrong. Please try again.
              </div>
            }
          >
            <div className='mb-6 flex flex-col gap-4 sm:flex-row sm:items-center'>
              <Suspense
                fallback={
                  <div className='h-12 w-full animate-pulse rounded-lg bg-input sm:max-w-sm' />
                }
              >
                <SearchInput />
              </Suspense>
              <SportFilter />
            </div>

            <Suspense fallback={<LeaguesSkeleton />}>
              <Leagues />
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
}

function LeaguesSkeleton() {
  return (
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {Array.from({ length: 6 }).map((_, i) => (
        <LeagueCardSkeleton key={i} />
      ))}
    </div>
  );
}
