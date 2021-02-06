import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Hero, About, Resume, Projects, Contact } from './components';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    fetchData();
    return () => fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('/server/data.json');
      setState(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const { profile, resume, portfolio } = state;
  console.log(resume);

  return (
    <div className='App'>
      <NavBar />
      <main>
        <Hero data={profile} />
        <About data={profile} />
        <Resume data={resume} />
        <Projects data={portfolio} />
        <Contact data={profile} />
      </main>
      <Footer data={profile} />
    </div>
  );
};

export default App;
