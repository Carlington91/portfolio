import React from 'react';

const Resume = ({ data }) => {
  const renderEducation = data?.education?.map((education, i) => {
    return (
      <ul className='card' key={i}>
        <h2>{education.school}</h2>
        <h3>
          {education.degree} . {education.date_graduated}
        </h3>
        <p>{education.description}</p>
      </ul>
    );
  });

  const renderProgrammingLanguages = (
    <div className='card'>
      <h3>Programming Languages</h3>
      <ul className='card_content'>
        {data?.programming_languages?.map((language, i) => (
          <li key={i}>{language}</li>
        ))}
      </ul>
    </div>
  );

  const renderFrameworks = (
    <div className='card'>
      <h3>Frameworks</h3>
      <ul className='card_content'>
        {data?.frameworks?.map((framework, i) => (
          <li key={i}>{framework}</li>
        ))}
      </ul>
    </div>
  );

  const renderWork = data?.work?.map((work, i) => {
    return (
      <div className='card' key={i}>
        <h3>{work.company}</h3>
        {work.description.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
      </div>
    );
  });

  const renderDatabases = (
    <div className='card'>
      <h3>Databases</h3>
      <div className='card_content'>
        {data?.databases?.map((database, i) => (
          <li key={i}>{database}</li>
        ))}
      </div>
    </div>
  );

  return (
    <section id='resume' className='resume bg_white'>
      <div className='container'>
        <div className='section_header'>
          <h2>
            <span>Resume</span>
          </h2>
        </div>

        <div className='education resume_content'>
          <div className='resume_content_left'>
            <h2>
              <span>Education</span>
            </h2>
          </div>
          <div className='resume_content_right'>{renderEducation}</div>
        </div>

        <div className='work resume_content'>
          <div className='resume_content_left'>
            <h2>
              <span>Work</span>
            </h2>
          </div>
          <div className='resume_content_right'>{renderWork}</div>
        </div>
        <div className='skills resume_content'>
          <div className='resume_content_left'>
            <h2>
              <span>Skills</span>
            </h2>
          </div>
          <div className='resume_content_right'>
            {renderProgrammingLanguages} {renderFrameworks} {renderDatabases}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
