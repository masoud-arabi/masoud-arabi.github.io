import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-32'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#CE7777] text-[#BDBCB8]'>Contact</p>
                <p className='text-gray-300 py-4'>Let's keep in touch - masoud.arabi.dev@gmail.com</p>
            </div>
            <input className='bg-[#BDBCB8] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#BDBCB8]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#BDBCB8] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#CE7777] hover:border-[#CE7777] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact