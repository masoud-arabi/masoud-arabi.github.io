import React from 'react';

const Experience = () => {
  return (
    <div name='experience' className='w-full sm:h-screen bg-[#0a192f] text-[#BDBCB8] pt-32'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#CE7777]'>
            Experience
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right '>
              <p className='text-4xl font-bold'>Collabmachine Inc</p>  
              <p className='pt-4 text-xl font-bold'>Montreal, Quebec, Canada</p>  
              <p className='pt-4 text-xl font-bold'>January 2021 - present</p>  
            </div>
            <div>
              <span><strong>Responsibilities</strong></span> 
              <ul>
                <p className='py-2'>Develop new features, and maintain the main platform of Collab machine.</p>
                <p className='py-2'>Complete database migrations with Active Record.</p>
                <p className='py-2'>Use version control tools Git and Gitlab to add application functionality.</p>
                <p className='py-2'>Write functional, unit, and integration tests with RSpec for application quality assurance.</p>
                <p className='py-2'>Work closely with designers and other developers in a tightly knit.</p>
                <p className='py-2'>Work with technologies such as RESTful API,Actioncable and Stripe connect API for payments</p>
              </ul> 
            </div>
          </div>
      </div>
    </div>
  );
};

export default Experience;
