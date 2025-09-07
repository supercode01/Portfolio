import React from 'react';
import Title from '../layouts/Title';
import Skills from './Skills';

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="2+ YEARS OF EXPERIENCE" des="Professional Skills" />
      </div>     

      {/* Always render Skills */}
      <Skills />
    </section>
  );
};

export default Resume;
