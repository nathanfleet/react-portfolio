import React, { useRef } from 'react';
import Tilt from 'react-tilt';

import { styles } from '../constants';
import github from "../assets/github.png";

import { projects } from '../constants';

const ProjectCard = ({
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    const tiltRef = useRef(null);

    return (
      <div>
        <Tilt
          ref={tiltRef}
          className='bg-white p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
  
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
  
          <div className='mt-5'>
            <h3 className='text-black font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-black text-[14px]'>{description}</p>
          </div>
  
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className="text-[14px] text-blue-400"
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </div>
    );
  };

const Projects = () => {
    return (
        <div id="projects" className="flex flex-col items-center justify-center md:h-full pt-20">
            <div className="max-w-4xl w-full px-4">
            <div className="flex-col items-left text-left">
            <p className={styles.subText}>My work</p>
            <h2 className={styles.headText}>Projects.</h2>
            </div>

            
            <p
                className='mt-3 text-white text-[17px] max-w-3xl leading-[30px]'
            >
                The following are some of my projects which showcase my ability to work
                with the different technologies listed above. They demonstrate my ability
                to tackle a given problem. Links to the source code can be found via GitHub
                icon in the below cards.
            </p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7 justify-center'>
            {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
            </div>
        </div>
        );
};

export default Projects;
