import Image from 'next/image';
import PageHeading from '@/components/PageHeading';
import DocumentSvg from '@/public/svgs/document.svg';
import { SocialURLS } from '@/constants/social';

// Social Svg
import GithubIcon from '@/public/svgs/social/github.svg';
import LinkedinIcon from '@/public/svgs/social/linkedin.svg';
import InstagramIcon from '@/public/svgs/social/instagram.svg';

// Technology SVG
import HTMLSvg from '@/public/svgs/technologies/html.svg';
import NextSvg from '@/public/svgs/technologies/nextjs.svg';
import SassSvg from '@/public/svgs/technologies/sass.svg';
import TailwindSvg from '@/public/svgs/technologies/tailwind.svg';
import JSSvg from '@/public/svgs/technologies/javascript.svg';
import BootstrapSvg from '@/public/svgs/technologies/bootstrap.svg';
import NodeSvg from '@/public/svgs/technologies/nodejs.svg';
import ReactSvg from '@/public/svgs/technologies/reactjs.svg';

const About = () => {
  return (
    <div className='container mx-auto'>
      {/* Header */}
      <PageHeading heading='ABOUT' />
      {/* About */}
      <div className='mb-[30px] flex flex-col rounded-[10px] bg-blue-dark px-[20px] py-[30px] text-white md:px-[54px] md:py-[46px] xl:flex-row'>
        <div className='flex max-w-[100%] justify-center xl:mr-4 xl:block xl:max-w-[45%]'>
          <Image
            className='rounded-[10px]'
            src='/images/profile.jpg'
            height={531}
            width={531}
            alt='profile'
          />
        </div>
        <div className='mt-4 max-w-[100%] xl:mt-0 xl:max-w-[60%]'>
          <p className='text-[16px] leading-[20px] md:text-[20px] md:leading-[26px]'>
            I'm Mohit, a Software Development Engineer at
            <span className='text-neon-green'> Collegedunia Web Pvt. Ltd</span>.
            My passion lies in crafting user-centric experiences as a front-end
            developer. With a keen eye for detail and a love for clean code, I
            specialize in building high-performance websites and applications.
            My expertise spans 
            <span className='text-neon-green'>
              HTML, CSS, JavaScript, React, Node.js, Tailwind CSS
            </span>
            . From concept to execution, I strive to create digital experiences
            that seamlessly blend functionality with aesthetics. My journey
            isn't just confined to coding. I bring a wealth of 
            <span className='text-neon-green'>
              experience in frontend development and agile scrum methodologies
            </span>
            , ensuring smooth integrations between design and development.
            Collaboration is at the heart of my approach, as I believe the best
            results emerge from teamwork and communication. Beyond the realm of
            technology, I find solace in creative pursuits. Photography allows
            me to capture moments and tell stories through my lens. And when I
            need to recharge, you'll often find me exploring new music, curating
            playlists, and immersing myself in melodies from diverse genres. So,
            whether you're 
            <span className='text-neon-green'>
              seeking a skilled developer or a collaborative team player
            </span>
            , I'm here to bring your digital visions to life. Let's connect and
            embark on an exciting journey of innovation together!
          </p>
          <a
            download
            href='/docs/Mohit_Resume.pdf'
            className='mt-[30px] flex w-max cursor-pointer items-center justify-center rounded-lg border-2 border-neon-green p-[10px]'
          >
            <span className='icon-30 mr-2'>
              <DocumentSvg />
            </span>
            Download Resume
          </a>
        </div>
      </div>
      {/* Skills */}
      <div className='mb-[30px] flex flex-col md:flex-row'>
        <div className='mr-[30px] flex w-[100%] max-w-[100%] flex-col rounded-[10px] bg-blue-dark py-[35px] md:w-[70%] md:max-w-[70%]'>
          <h3 className='px-[38px] text-[22px] font-bold leading-[35px] text-white md:text-[27px]'>
            Skills
          </h3>
          <div className='group inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
            {Array(2)
              .fill(null)
              .map((_, index) => (
                <ul
                  key={index}
                  aria-hidden={index === 1 ? 'true' : undefined}
                  className='animate-infinite-scroll group-hover:paused flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8'
                >
                  <li>
                    <span className='icon-57'>
                      <HTMLSvg />
                    </span>
                  </li>
                  <li>
                    <span className='icon-57'>
                      <JSSvg />
                    </span>
                  </li>
                  <li>
                    <span className='icon-57'>
                      <SassSvg />
                    </span>
                  </li>
                  <li>
                    <span className='icon-57'>
                      <ReactSvg />
                    </span>
                  </li>
                  <li>
                    <span className='icon-57'>
                      <NextSvg />
                    </span>
                  </li>
                  <li>
                    <span className='icon-57'>
                      <TailwindSvg />
                    </span>
                  </li>
                  <li>
                    <span className='icon-57'>
                      <BootstrapSvg />
                    </span>
                  </li>
                  <li>
                    <span className='icon-57'>
                      <NodeSvg />
                    </span>
                  </li>
                </ul>
              ))}
          </div>
        </div>
        <div className='mt-[30px] flex w-[100%] max-w-[100%] items-center justify-center gap-[15px] rounded-[10px] bg-blue-dark py-[30px] md:mt-0 md:w-[30%] md:max-w-[30%] md:py-0'>
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
            className='icon-45 flex cursor-pointer'
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
      </div>
    </div>
  );
};

export default About;
