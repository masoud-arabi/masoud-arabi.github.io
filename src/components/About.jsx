import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full sm:h-screen bg-[#0a192f] text-[#BDBCB8] pt-32'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#CE7777]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>Experienced full stack developer who is enthusiastic about writing
                 clean, efficient, and accessible code in a functional framework. 
              </p>
              <p className='pt-8'>A consistent team player. Proficient in Ruby programing language.
                  Committed to the total development lifecycle, the maintenance of
                   code quality and bug free application is of the utmost importance.
              </p>  
            </div>
            <div>
              <span><strong>Backend</strong></span> 
              <p>You may need a new fast and reliable website or even looking for
                 someone to maintain or update your current platform. I, as a 
                 back-end developer, have the ability to offer you a variety of
                  solutions.</p>
              <br/>
              <span><strong>Frontend</strong></span> 
              <p>The first feature that can attract your users in the first step, is the user 
                interface of your application. Apart from designing point of view, users need
                 to experience smooth and easy navigations through the pages, and it is essential
                  to avoid ambiguity. 
              </p>  
              <br/>
              <span><strong>Devops& CI/CD</strong></span> 
              <p>Choose a responsive, fast, and reliable database is an essential part of a project.
                 Moreover, evaluating the needs and the costs could affect the choice of a database.
                  In addition, to deploy your website or bring your final product to the market you
                   may need plenty of tools that could increase the performance.
              </p>  
              
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
