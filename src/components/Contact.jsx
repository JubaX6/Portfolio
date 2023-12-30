import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xdp9u8a', 'template_drr3q4f', form.current, 'W-m3Ppx9mTlSuoHg4')
      .then(
        (result) => {
          console.log(result.text);
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
          setEmailSent(false);
        }
      );
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <div className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Send me a message</p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className='my-4'>
            <input
              className='bg-[#ccd6f6] mt-2 border-b-2 border-cyan-500 focus:outline-none focus:border-cyan-500 p-2 w-full'
              type='text'
              id='user_name'
              name='user_name'
              placeholder='Your Name'
              required
            />
          </div>
          <div className='my-4'>
            <input
              className='bg-[#ccd6f6] mt-2 border-b-2 border-cyan-500 focus:outline-none focus:border-cyan-500 p-2 w-full'
              type='email'
              id='user_email'
              name='user_email'
              placeholder='Your Email'
              required
            />
          </div>
          <div className='my-4'>
            <textarea
              className='bg-[#ccd6f6] mt-2 border-b-2 border-cyan-500 focus:outline-none focus:border-cyan-500 p-2 w-full'
              name='message'
              id='message'
              rows='6'
              placeholder='Your Message'
              required
            ></textarea>
          </div>
          <input
            className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-4 mx-auto flex items-center'
            type='submit'
            value="Let's Collaborate"
          />
          {emailSent === true && <p className='text-green-500'>Email sent successfully!</p>}
          {emailSent === false && <p className='text-red-500'>Failed to send email. Please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
