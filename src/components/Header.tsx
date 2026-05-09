export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-2'>
          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary'>
            <svg
              className='h-5 w-5 text-primary-foreground'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 10V3L4 14h7v7l9-11h-7z'
              />
            </svg>
          </div>
          <span className='text-lg font-semibold tracking-tight'>Sporty</span>
        </div>
      </div>
    </header>
  );
}
