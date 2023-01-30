import React from 'react';

const Educations = () => {
  return (
    <div name='education' className='w-full sm:h-screen bg-[#0a192f] text-[#BDBCB8] pt-32'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#CE7777]'>
              Educations
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right'>
              <p className='text-4xl font-bold'>Le Wagon</p>  
              <p className='pt-4 text-xl font-bold'>September 2020 - December 2020</p>  
            </div>
            <div>
                <span><strong>Full stack Ruby on Rails</strong></span> 
                <p>More than 500 hours coding Bootcamp learning Ruby on Rails,
                    HTML, CSS, Bootstrap, JavaScript ES6, React, Redux,
                    Postgre SQL, git, GitHub, and Heroku. Designed, implemented, and shipped to
                    production a clone of Airbnb and a Rails prototype.
                </p>
            </div>
            <div className='sm:text-right'>
              <p className='text-4xl font-bold'>Global ERP Solutions</p>  
              <p className='pt-4 text-xl font-bold'>January 2018 - May 2018</p>  
            </div>
            <div>
                <span><strong>Java Development</strong></span> 
                <p>3 months intensive Java development Bootcamp learning
                    Java EE2, Spring, springboot, Hibernate, JSP, java microservice, Maven, 
                    JUnit, HTML5, CSS3, JavaScript ES6, Jquery, 
                    relational databases, git and created two Java application.
                </p>
            </div>
            <div className='sm:text-right'>
              <p className='text-4xl font-bold'>PTC Metaco</p>  
              <p className='pt-4 text-xl font-bold'>January 2017 - April 2017</p>  
            </div>
            <div>
                <span><strong>Forntend development</strong></span> 
                <p>more than 300 houres intensive coding Bootcamp learning
                    HTML5, CSS3, JavaScript ES6, Jquery
                    MySQL, git and created some single page application.
                </p>
            </div>
            <div className='sm:text-right'>
              <p className='text-4xl font-bold'>Yazd University</p>  
              <p className='pt-4 text-xl font-bold'>September 2006 - June 2011</p>  
            </div>
            <div>
                <span><strong>Industrial Engineering</strong></span> 
                <p>4 years bacheloaur in industrial engineering
                </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Educations;
