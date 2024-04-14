import Link from 'next/link';
import Image from 'next/image';
import Tooltip from '@/components/Tooltip/index.jsx';
import { useMediaQuery } from '@react-hook/media-query';

const ProjectCard = ({ project = {} }) => {
  const { cover, background, title, description, technology, techStack, url } =
    project;

  const isXsScreen = useMediaQuery('(max-width: 320px)');
  const isSmScreen = useMediaQuery('(max-width: 390px)');
  const isBetween1024And1280 = useMediaQuery(
    '(min-width: 1024px) and (max-width: 1279px)'
  );

  return (
    <div className='w-full max-w-[400px] rounded-[20px] bg-blue-dark md:w-[45%] lg:w-[31%]'>
      <div className='relative'>
        <Image
          className='rounded-tl-[20px] rounded-tr-[20px] object-fill'
          src={background}
          height={240}
          width={400}
          alt='background'
        />
        <Image
          className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform rounded-[10px]'
          src={cover}
          height={isSmScreen ? 190 : 208}
          width={isSmScreen ? 260 : 360}
          alt='cover'
        />
      </div>
      <div className='flex flex-col gap-[12px] p-[15px] md:p-[20px] xl:p-[33px]'>
        <Link href='/projects/[specificProject]' as={url}>
          <h3 className='text-[24px] font-bold leading-[29px] text-white hover:underline md:text-[33px]'>
            {title}
          </h3>
        </Link>
        <span className='text-[17px] font-medium leading-[16px] text-neon-green md:text-[19px]'>
          {techStack}
        </span>
        <p className='text-[16px] leading-[20px] text-grey'>{description}</p>
        {isXsScreen || isBetween1024And1280 ? (
          <div className='inline-flex overflow-hidden'>
            {Array(2)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  aria-hidden={index === 1 ? 'true' : undefined}
                  className='animate-infinite-scroll flex gap-[10px] '
                >
                  {Object.entries(technology).map(([key, value]) => (
                    <Tooltip key={key} title={key}>
                      <span className='icon-45'>{value}</span>
                    </Tooltip>
                  ))}
                </div>
              ))}
          </div>
        ) : (
          <div className='flex gap-[10px] '>
            {Object.entries(technology).map(([key, value]) => (
              <Tooltip key={key} title={key}>
                <span className='icon-45'>{value}</span>
              </Tooltip>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
