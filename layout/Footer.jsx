import GithubIcon from '@/public/svgs/social/github.svg';
import LinkedinIcon from '@/public/svgs/social/linkedin.svg';
import InstagramIcon from '@/public/svgs/social/instagram.svg';
import { SocialURLS } from '@/constants/social';

const Footer = () => {
  return (
    <div className='max-500:px-0 container mx-auto'>
      <div className='flex flex-col items-center justify-center rounded-tl-[20px] rounded-tr-[20px] bg-blue-dark pb-[48px] pt-[81px] text-grey'>
        <span className='text-[100px] font-bold leading-[173px] text-white md:text-[133px]'>
          Mohit.
        </span>
        <span className='mb-[25px] max-w-[641px] text-center text-[16px] md:text-[21px] md:leading-[27px]'>
          I'm a web developer based in India. I have a very deep passion to
          design stuff ❤️ This Website is made with the lot of love and passion.
        </span>
        <div className='mb-[25px] flex gap-[10px]'>
          <a
            href={SocialURLS.github}
            target='_blank'
            rel='noopener noreferrer'
            className='icon-54 cursor-pointer'
          >
            <GithubIcon />
          </a>
          <a
            href={SocialURLS.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='icon-45 flex cursor-pointer items-center justify-center'
          >
            <LinkedinIcon />
          </a>
          <a
            href={SocialURLS.instagram}
            target='_blank'
            rel='noopener noreferrer'
            className='icon-57 cursor-pointer'
          >
            <InstagramIcon />
          </a>
        </div>
        <div className='flex flex-col'>
          <span className='text-[18px] leading-[27px] md:text-[21px]'>
            Portfolio v1.0
          </span>
          <span className='text-[18px] leading-[27px] md:text-[21px]'>
            © 2024 Mohit
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
