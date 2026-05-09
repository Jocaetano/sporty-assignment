'use client';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import type { SubmitEventHandler } from 'react';

import { useSearch } from '@/hooks/useSearch';

export default function SearchInput() {
  const { query, handleSearch } = useSearch();

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const searchTerm = formData.get('searchInput') as string | null;

    handleSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className='relative w-full sm:max-w-sm'>
      <div className='flex h-12 w-full rounded-lg border border-border bg-input pl-4 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'>
        <input
          name='searchInput'
          placeholder='Search leagues...'
          type='search'
          defaultValue={query}
          className='text-foreground placeholder:text-muted-foreground pr-10 w-full'
        />

        <button type='submit' className='flex items-center pl-3' tabIndex={-1}>
          <MagnifyingGlassIcon className='h-5 w-5 text-muted-foreground cursor-pointer' />
        </button>
      </div>
    </form>
  );
}
