import React from 'react';
import { FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Hero = ({ data }) => {
  return (
    <div id='hero' className='hero'>
      <div className='hero_bg'></div>
      <div className='hero_content'>
        <h2>I'm {data?.name}.</h2>
        <h1>
          <Typewriter
            options={{
              strings: data
                ? `${data?.occupation} based in ${data?.address?.city}, ${data?.address?.state}.`
                : null,
              autoStart: true,
              loop: false,
            }}
          />
        </h1>
      </div>

      <div className='actions'>
        <a href='#portfolio' className='btn btn_primary'>
          Portfolio
        </a>
        <a href='#about' className='btn btn_secondary'>
          About Me
        </a>
      </div>
      <div className='social'>
        {data?.social?.map((item, i) => {
          if (item.name === 'linkedin') {
            item.icon = <FaLinkedinIn />;
          }
          if (item.name === 'github') {
            item.icon = <FaGithubAlt />;
          }

          return (
            <a
              href={item.url}
              title={item.name}
              target='_blank'
              rel='noreferrer'
              key={i}
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
