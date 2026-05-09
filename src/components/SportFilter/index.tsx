'use client';

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import { Select } from 'radix-ui';
import { type ComponentProps, forwardRef, useMemo } from 'react';

import { useSports } from '@/hooks/useSports';

import { useSportFilter } from '@/components/providers/SportFilterContext';

export default function SportFilter() {
  const { data: sports } = useSports();
  const { setSportFilter } = useSportFilter();

  const allOption = useMemo(() => ({ id: '_allId', label: 'All Sports' }), []);

  const options = [
    allOption,
    ...sports.map((sport) => ({
      id: sport.idSport,
      label: sport.strSport,
    })),
  ];

  const handleSelect = (value: string) => {
    if (value === 'All Sports') {
      setSportFilter(undefined);
      return;
    }

    setSportFilter(value);
  };

  return (
    <Select.Root defaultValue={allOption.label} onValueChange={handleSelect}>
      <Select.Trigger
        className='inline-flex h-12 items-center justify-between gap-2 rounded-lg border border-border bg-input px-4 text-sm text-foreground transition-colors hover:border-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:min-w-45'
        aria-label='Sport Filter'
      >
        <Select.Value placeholder='Select a sport...' />
        <Select.Icon>
          <ChevronDownIcon className='h-4 w-4 text-muted-foreground' />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className='overflow-hidden rounded-lg border border-border bg-card shadow-xl'>
          <Select.ScrollUpButton className='flex h-6 cursor-default items-center justify-center bg-card'>
            <ChevronUpIcon className='h-4 w-4 text-muted-foreground' />
          </Select.ScrollUpButton>

          <Select.Viewport className='p-1'>
            <Select.Group>
              <Select.Label className='px-3 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground'>
                Sports
              </Select.Label>
              {options.map((option) => (
                <SelectItem key={option.id} value={option.label}>
                  {option.label}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton className='flex h-6 cursor-default items-center justify-center bg-card'>
            <ChevronDownIcon className='h-4 w-4 text-muted-foreground' />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof Select.Item>
>(({ children, ...props }, forwardedRef) => {
  return (
    <Select.Item
      {...props}
      ref={forwardedRef}
      className='relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 pl-8 text-sm text-foreground outline-none transition-colors data-highlighted:bg-accent data-highlighted:text-accent-foreground'
    >
      <Select.ItemIndicator className='absolute left-2 inline-flex items-center'>
        <CheckIcon className='h-4 w-4 text-primary' />
      </Select.ItemIndicator>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
});
