import Image from 'next/image';
import Link from 'next/link';

type Props = {};

function Header({}: Props) {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image
            width={50}
            height={50}
            objectFit='cover'
            src='/images/logo.jpg'
            alt='logo'
            className='rounded-full'
          />
        </Link>
        <h1>AlejandroBlog</h1>
      </div>
      <div>
        <Link
          href='/'
          className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#20c997] flex items-center rounded-full text-center'>
          Sign up for news
        </Link>
      </div>
    </header>
  );
}

export default Header;
