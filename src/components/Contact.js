import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const Contact = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    error: '',
    success: false,
  });

  const { name, email, message, error, success } = state;

  const verifyRecaptcha = async (value) => {
    await axios.post(
      '/api/recaptcha/',
      { value },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    // setVerified(res.data.message);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      success: false,
      error: '',
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return setState({
        ...state,
        success: '',
        error: 'All fields are required.',
      });
    }

    const data = { name, email, message };
    const headers = { 'Content-Type': 'application/json' };
    const res = await axios.post('/api/', data, { headers });

    if (res.data.error) {
      return setState({ ...state, error: res.data.error });
    }

    setState({ name: '', email: '', message: '', error: '', success: true });
  };
  const contactForm = (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <div className='form_row'>
          <div className='col-half'>
            <label>
              Name <span>*</span>
            </label>
            <input
              className='form-control'
              type='text'
              name='name'
              value={name}
              onChange={handleChange}
            />
          </div>

          <div className='col-half'>
            <label>
              Email <span>*</span>
            </label>
            <input
              className='form-control'
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className='form-group'>
        <label>
          Message <span>*</span>
        </label>
        <textarea
          className='form-control'
          name='message'
          value={message}
          onChange={handleChange}
          rows='6'
        />
      </div>
      <div className='form-group'>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA}
          onChange={verifyRecaptcha}
        />
      </div>
      <button className='btn btn_primary' type='submit'>
        Submit
      </button>
    </form>
  );
  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <div className='section_header'>
          <h2>
            <span>Contact</span>
          </h2>
        </div>
        <div className='contact_content'>
          {error && <p className='error'>{error}</p>}
          {success && (
            <div className='success_message'>
              <h3>Thank you for contacting me!</h3>
              <p>
                Your message has been successfully sent. I will respond very
                soon!
              </p>
            </div>
          )}
          {contactForm}
        </div>
      </div>
    </section>
  );
};

export default Contact;
