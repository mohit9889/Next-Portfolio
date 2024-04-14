import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@react-hook/media-query';
import Tooltip from '@/components/Tooltip/index.jsx';
import ArrowLeftSvg from '@/public/svgs/arrow-left.svg';
import CodeSvg from '@/public/svgs/code.svg';
import GithubSvg from '@/public/svgs/social/github-small.svg';
import { projectsData } from '@/constants/projects';

const SpecificProject = () => {
  const router = useRouter();
  const [project, setProject] = useState(null);
  const isSmScreen = useMediaQuery('(max-width: 500px)');

  useEffect(() => {
    const currentProject = projectsData.find(
      (p) => p.url === router.asPath.slice(1)
    );
    setProject(currentProject || null);
  }, [router.asPath]);

  const handleBack = () => {
    router.back();
  };

  return (
    <div className='container mx-auto text-white'>
      {project && (
        <>
          {/* Back Button */}
          <div className='py-6 md:py-10'>
            <button
              onClick={handleBack}
              className='text-md flex items-center justify-center rounded-md bg-blue-dark p-3 font-bold md:text-lg'
            >
              <ArrowLeftSvg className='mr-2 h-6 w-6' />
              Back
            </button>
          </div>

          {/* Project Details */}
          <div className='mb-[30px] flex flex-col xl:flex-row '>
            <div className='relative mr-0 max-w-[100%] md:w-max xl:mr-[40px] xl:max-w-[70%]'>
              <Image
                className='rounded-[10px]'
                src={project.background}
                height={457}
                width={720}
                alt='background'
              />
              <Image
                className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform rounded-[10px]'
                src={project.cover}
                height={408}
                width={isSmScreen ? 320 : 600}
                alt='background'
              />
            </div>
            <div className='mt-4 flex max-w-[100%] flex-col xl:mt-0 xl:max-w-[30%]'>
              <h3 className='mb-4 text-[30px] font-bold leading-[39px] md:text-[44px]'>
                {project.title}
              </h3>
              <span className='mb-4 text-[20px] font-medium leading-[22px] text-neon-green md:text-[25px]'>
                {project.techStack}
              </span>
              <p className='mb-4 text-[18px] leading-[28px] text-grey md:text-[21px]'>
                {project.description}
              </p>
              <span className='mb-[6px] text-[23px] font-bold leading-[23px] md:text-[27px]'>
                Tech Stack
              </span>
              <div className='mb-4 flex gap-[10px]'>
                {Object.entries(project.technology).map(([key, value]) => (
                  <Tooltip key={key} title={key}>
                    <span className='icon-45'>{value}</span>
                  </Tooltip>
                ))}
              </div>
              <div className='flex items-center gap-[10px]'>
                <a
                  className='text-black-trinary flex h-[50px] w-[226px] items-center justify-center rounded-[10px] bg-neon-green text-[18px] font-bold leading-[20px] md:h-[60px] md:text-[22px]'
                  href='#'
                >
                  <span className='icon-31 mr-3'>
                    <CodeSvg />
                  </span>
                  Demo
                </a>
                <a
                  className='text-black-trinary flex h-[50px] w-[226px] items-center justify-center rounded-[10px] bg-neon-green text-[18px] font-bold leading-[20px] md:h-[60px] md:text-[22px]'
                  href='#'
                >
                  <span className='icon-25 icon-black-trinary mr-3'>
                    <GithubSvg />
                  </span>
                  Github
                </a>
              </div>
            </div>
          </div>

          {/* Main Feature */}
          {project.mainFeature && (
            <div className='mb-10 rounded-md bg-blue-dark px-[20px] py-6 md:px-[40px]'>
              <h2 className='text-[30px] font-bold text-neon-green md:text-[44px]'>
                Main Feature
              </h2>
              <ul className='list-disc'>
                {project.mainFeature.map((feature, index) => (
                  <li key={index} className='mb-[11px] flex flex-col'>
                    <span className='text-[20px] font-bold leading-[39px] md:text-[30px]'>
                      {feature.title}
                    </span>
                    {feature.points.map((point, index) => (
                      <span
                        className='text-[18px] leading-[25px]  text-grey md:text-[25px] md:leading-[32px]'
                        key={index}
                      >
                        {point}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SpecificProject;
