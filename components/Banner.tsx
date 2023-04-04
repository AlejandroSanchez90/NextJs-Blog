'use client';

type Props = {};

function Banner({}: Props) {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 mb-10'>
      <div>
        <h1 className='text-7xl'>Ale&apos;s Daily Blog</h1>
        <h2 className='mt-5 md:mt-1'>
          Welcome to{' '}
          <span className='underline decoration-4 decoration-primaryGreen'>Every Developers</span>{' '}
          favorite blog
        </h2>
      </div>
      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        New product features | The last in technology | The weekly debugging
      </p>
    </div>
  );
}

export default Banner;
