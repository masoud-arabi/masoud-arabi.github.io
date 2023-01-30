import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Masoud from '../assets/masoud3.jpg';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full lg:h-screen bg-[#0a192f] flex sm:flex-row flex-col justify-center pt-32'>
      {/* Container */}
        <div className='max-w-[700px] ml-auto pl-8 pr-2 flex flex-col justify-center h-full'>
          <p className='text-[#CE7777]'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#BDBCB8]'>
            MASOUD ARABI
          </h1>
          
          <h2 className='text-4xl sm:text-6xl font-bold text-[#90979b]'>
            I'm a <br/> Full Stack Developer,
          </h2>
          <p className='text-[#90979b] py-4 max-w-[700px]'>
           driven by quality, open minded,
           flexible, eager to learn and achieve quality work.
          Skilled in utilizing a wide variety of tools and programs.
          </p>
          <div>
            <Link to='projects' smooth={true} duration={500}>
              <button className='text-[#BDBCB8] group border-2 border-[#BDBCB8] px-6 py-3 my-2 flex items-center hover:bg-[#CE7777] hover:border-[#CE7777]'>
                View Projects
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                </span>
              </button>
            </Link>
          </div>
        </div>
          <div className='max-w-[300px] m-auto pl-2 pr-8 pt-8 flex flex-col justify-center h-full '>
            <div className='shadow-md shadow-[#040c16] duration-500'>

            <img className='flex justify-center rounded-md' src={Masoud} alt="HTML icon" />
            </div>
          </div>
    </div>
  );
};

export default Home;
