import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const Page = () => {
  return (
    <div className='mx-12 my-8'>
      <h1 className='text-5xl font-bold mb-8 text-center'>Contact</h1>

      <div className='flex flex-col lg:flex-row lg:justify-between gap-8'>
        <div className='space-y-4 max-w-[750px] flex flex-col items-center'>
          <h2 className='text-3xl font-bold text-teal-700 text-center'>Stay Connected. Shape the Future of Health.</h2>
          <p className='text-center'>
            At Nyumbani Care, we're reimagining healthcare to be more accessible, private, and personal — 
            right from the comfort of your home.
            Whether you have a question, feedback, or want to be part of something transformative, we'd love to hear from you.
          </p>

          <h2 className='text-3xl font-bold text-teal-700 text-center'>Be Part of the Beta</h2>
          <p className='text-center'>
            Sign up now for early access, exclusive updates, and a direct role in shaping the future of telehealth in East Africa.
            As a beta user, you'll get a first look at new features and help us build a platform that truly works for you.
          </p>

          <p className="inline-block rounded-full bg-[#CBF8CB] px-3 py-1 text-[8px] lg:text-sm text-[#00796B] text-center lg:ml-10 mb-2">
            Your privacy matters. We'll only use your information to keep you updated — no spam, ever.
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <label>First Name</label>
            <Input type="text" className='p-3 rounded-lg w-full md:w-80' />
          </div>

          <div className='flex flex-col gap-1'>
            <label>Email</label>
            <Input type="email" className='p-3 rounded-lg w-full md:w-80' />
          </div>

          <div className='flex flex-col gap-1'>
            <label>How can we help you?</label>
            <Textarea />
          </div>

          <Button className='bg-teal-600 hover:bg-teal-700'>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
