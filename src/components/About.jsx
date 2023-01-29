import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>I am a Full Stack Developer with specialliztion in Ruby and Ruby on Rails
                backend frameworks. Working in various teams and environments lead me to
                learn more programming languages and frameworks. I also learned more about
                Javascript and Typescript frameworks relying on market needs during recent years..</p>
            </div>
            <div>
              <span><strong>Backend</strong></span> 
              <p>I am a Full Stack Developer with specialliztion in Ruby and Ruby on Rails
                backend frameworks. Working in various teams and environments lead me to
                learn more programming languages and frameworks. I also learned more about
                Javascript and Typescript frameworks relying on market needs during recent years.
              </p>  
              <br/>
              <span><strong>Frontend</strong></span> 
              <p>I am a Full Stack Developer with specialliztion in Ruby and Ruby on Rails
                backend frameworks. Working in various teams and environments lead me to
                learn more programming languages and frameworks. I also learned more about
                Javascript and Typescript frameworks relying on market needs during recent years.
              </p>  
              <br/>
              <span><strong>Devops& CI/CD</strong></span> 
              <p>I am a Full Stack Developer with specialliztion in Ruby and Ruby on Rails
                backend frameworks. Working in various teams and environments lead me to
                learn more programming languages and frameworks. I also learned more about
                Javascript and Typescript frameworks relying on market needs during recent years.
              </p>  
              
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
