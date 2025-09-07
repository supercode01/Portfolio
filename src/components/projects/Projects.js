import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="EcoMeubles Furniture Studio"
          des="A clean, user-friendly online store highlighting stylish, high-quality furniture options—combining timeless elegance with functionality, backed by decades of design experience."
          src={projectOne}
          githubLink="" // Replace with actual link
          liveLink="https://ecomeubles.com/"
        />
        <ProjectsCard
          title="IUAffilBoost Digital Solutions"
          des="An integrated platform delivering responsive web and mobile app development alongside targeted social media campaigns—designed to turn client visions into reality with advanced technology and transparent communication."
          src={projectTwo}
          githubLink="" 
          liveLink="https://iuaffilboost.com/" 
        />
        <ProjectsCard
          title="Somaa Reputation Studio"
          des="An elegant bilingual (Arabic-English) landing page for a PR & marketing company, designed to highlight brand reputation management through impactful storytelling, visual identity, and data-driven client success metrics."
          src={projectThree}
          githubLink="https://github.com/daniel-ndeto/AmigoChat-Realtime-Chat-Application.git" // Replace with actual link
          liveLink="https://amigochat.netlify.app/" // Replace with actual link or remove if no live site
        />
        <ProjectsCard
          title="MediaFlow – TV & Radio"
          des="A dynamic media streaming portal that aggregates live TV channels and radio stations in one sleek interface—enabling users to instantly access news, music, sports, and entertainment across formats."
          src={projectFour} // Consider using a different image if available
          githubLink="https://github.com/yourusername/travel-booking-app" // Replace with actual link
          liveLink="https://your-travel-app-live-url.com" // Replace with actual link
        />
        <ProjectsCard
          title="FlexiCMS Admin Panel"
          des="A robust portal tailored for higher education institutions.
          It facilitates course scheduling, faculty coordination, student information
          management, and streamlines day-to-day administrative tasks."
          src={projectFive} // Consider using a different image if available
          githubLink="" // Replace with actual link
          liveLink="https://cms-five-rho.vercel.app/" // Replace with actual link or remove if no live site
        />
        <ProjectsCard
          title="Personal Protfolio"
          des="A clean and responsive personal portfolio built with React and styled-components, designed to elegantly present skills, projects, and contact information."
          src={projectSix} // Consider using a different image if available
          githubLink="https://github.com/yourusername/lms-system" // Replace with actual link
          liveLink="" // Replace with actual link
        />
      </div>
    </section>
  );
}

export default Projects
