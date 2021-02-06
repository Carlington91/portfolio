import React from 'react';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserCircle,
  FaDownload,
} from 'react-icons/fa';

const About = ({ data }) => {
  return (
    <section id='about' className='about bg_white'>
      <div className='container'>
        <div className='section_header'>
          <h2>
            <span>About</span>
          </h2>
        </div>
        <div className='about_content'>
          <div className='about_content_left'>
            <FaUserCircle />
            <h3>A Little About Me</h3>
            <p>{data?.bio}</p>
          </div>

          <div className='about_content_right'>
            <div className='contact_details'>
              <h3>Contact Details</h3>
              <div className='contact_details_content'>
                <h4>{data?.name}</h4>
                <div className='address'>
                  <h4>
                    <FaMapMarkerAlt />
                    {data?.address?.street} {data?.address?.city}
                    {','} {data?.address?.state} {data?.address?.zip_code}
                  </h4>
                </div>

                <h4>
                  <FaPhoneAlt />
                  {data?.phone}
                </h4>
                <h4>
                  <FaEnvelope /> {data?.email}
                </h4>
              </div>
            </div>
            <div>
              <button className='btn btn_download'>
                Download Resume <FaDownload />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
