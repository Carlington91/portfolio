import React from 'react';

const Projects = ({ data }) => {
  const renderProjects = data?.projects?.map((project, i) => {
    return (
      <div className='card' key={i}>
        <a href={project.url} target='_blank' rel='noreferrer'>
          <img src={`../images/${project.image}`} alt={project.title} />
        </a>
      </div>
    );
  });

  return (
    <section id='portfolio' className='portfolio bg_light'>
      <div className='container'>
        <div className='section_header'>
          <h2>
            <span>Portfolio</span>
          </h2>
        </div>
        <div className='portfolio_content'>{renderProjects}</div>
      </div>
    </section>
  );
};

export default Projects;
