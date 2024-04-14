import PageHeading from '@/components/PageHeading';
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/constants/projects.js';

const Projects = () => {
  return (
    <div className='container mx-auto'>
      {/* Heading */}
      <PageHeading heading='PROJECTS' />
      {/* Cards */}
      <div className='mb-[30px] flex flex-wrap items-center justify-center gap-[25px] p-[10px] md:justify-between'>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
