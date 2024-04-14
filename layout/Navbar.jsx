import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  const { asPath } = useRouter();

  const navLink = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className='py-[20px] md:py-[40px]'>
        <nav className='mx-auto flex items-center justify-center'>
          <div className='nav-links flex w-full items-center  justify-center'>
            <ul className='flex items-center gap-[20px] text-[15px] font-bold leading-[19.5px] md:gap-[89px]'>
              {navLink.map((link) => (
                <li key={link.path}>
                  <Link
                    as={link.path}
                    className={`${asPath === link.path ? 'text-neon-green' : 'text-white'} hover:text-neon-green`}
                    href={link.path}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
