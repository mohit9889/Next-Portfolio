import Link from 'next/link';
import SEO from '@/components/SEO';
import { homePageSEO } from '@/constants/seo';
import HeroHeader from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Contact from '@/components/ContactForm';
import ArrowRightSVG from '@/public/svgs/arrow-right.svg';
import { projectsData } from '@/constants/projects.js';

export default function Home() {
  return (
    <>
      <SEO seoData={homePageSEO} />
      <div className='text-white'>
        {/* Hero Header */}
        <HeroHeader />

        <div className='container mx-auto'>
          {/* About Section */}
          <div className='container mx-auto mb-[30px] rounded-[10px] bg-neon-green px-[20px] py-[50px] md:px-[100px]'>
            <h3 className='text-black-trinary mb-4 text-center font-humane text-[74px] font-bold leading-[65px]'>
              About
            </h3>
            <p className='text-black-trinary mb-4 text-[20px] leading-[25px] md:text-[26px] md:leading-[34px]'>
              Hi there! I'm Mohit, a Frontend Developer with a passion for
              crafting user-centric experiences. I specialize in front-end
              development with expertise in HTML, CSS, JavaScript, React,
              Node.js, Tailwind CSS. I thrive on collaboration and bring
              experience in agile scrum methodologies. Beyond coding, I enjoy
              photography, and exploring music. Let's connect and bring your
              digital visions to life
            </p>
            <div className='flex justify-end'>
              <Link
                as='/about'
                href='/about'
                className='flex h-[50px] w-[110px] items-center justify-center rounded-lg bg-blue-dark text-neon-green'
              >
                More...
              </Link>
            </div>
          </div>

          {/* Recent Project */}
          <div className='mb-[20px]'>
            {/* Header */}
            <div className='mb-[20px] flex w-full items-center justify-between rounded-[10px] bg-blue-dark px-[20px] py-[25px] text-white md:px-[45px] md:py-[32px]'>
              <span className=' font-humane text-[50px] font-bold leading-[65px] md:text-[74px]'>
                Recent Projects
              </span>
              <Link
                as='/projects'
                href='/projects'
                className='flex items-center text-[16px] font-bold leading-[28px] hover:underline md:text-[22px]'
              >
                See all{' '}
                <span className='icon-22 ml-1'>
                  <ArrowRightSVG />
                </span>
              </Link>
            </div>
            {/* Cards */}
            <div className='flex flex-wrap items-center justify-center gap-[25px] p-[10px] md:justify-between md:gap-[34px]'>
              {projectsData.slice(0, 3).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Contact />
        </div>
      </div>
    </>
  );
}
