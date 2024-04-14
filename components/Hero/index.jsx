import GithubIcon from '@/public/svgs/social/github.svg';
import LinkedinIcon from '@/public/svgs/social/linkedin.svg';
import styles from './styles.module.scss';

const HeroHeader = () => {
  return (
    <div className='hero-header relative mb-[100px] mt-[30px]'>
      {/* Left and Right shadow box */}
      <div
        className={`${styles['left-box']} shadow-box absolute left-0 top-0 h-full w-[100px] lg:w-[376px]`}
      ></div>
      <div
        className={`${styles['right-box']} shadow-box absolute right-0 top-0 h-full w-[100px] lg:w-[376px]`}
      ></div>
      {/* Scrolling Text(L to R) */}
      <div className='inline-flex h-max w-full flex-nowrap overflow-hidden '>
        <ul
          className={`${styles['bg-text']} animate-infinite-scroll flex items-center justify-center gap-x-[50px] md:justify-start`}
        >
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <li
                key={index}
                className='font-bebasNeue  whitespace-nowrap text-[100px] font-normal leading-[150px] text-neon-green md:text-[200px] md:leading-[250px]'
              >
                FRONTEND DEVELOPER
              </li>
            ))}
        </ul>
      </div>
      {/* Scrolling Text(R to L) */}
      <div className='inline-flex h-max w-full flex-nowrap overflow-hidden'>
        <ul
          className={`${styles['bg-text']} animate-infinite-scroll-reverse flex items-center justify-center gap-x-[50px] md:justify-start`}
        >
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <li
                key={index}
                className='font-bebasNeue whitespace-nowrap text-[100px] font-normal leading-[150px] text-neon-green md:text-[200px] md:leading-[250px]'
              >
                FRONTEND DEVELOPER
              </li>
            ))}
        </ul>
      </div>
      <div className='absolute  left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center text-neon-green'>
        <span className='mb-4 text-[35px] font-medium leading-[60px] md:text-[47px]'>
          Hey There I’m
        </span>
        <span className='font-humane text-[200px] font-bold leading-[150px] md:text-[340px] md:leading-[298px]'>
          MOHIT
        </span>
        <span className='max-w-[416px] text-center text-[20px] font-medium leading-[32px] md:text-[23px]'>
          Currently Working as a Software Development Engineer{' '}
        </span>
        <div className='mt-4 flex items-center justify-center'>
          <span className='icon-54 mr-[35px] cursor-pointer'>
            <GithubIcon />
          </span>
          <span className='icon-45 flex cursor-pointer items-center justify-center'>
            <LinkedinIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
