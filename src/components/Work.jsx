/**
 * Components
 */
import ProjectCard from "./ProjectCard";

// tags: ['API', 'MVC', 'Development', 'SPA', 'Web-design', 'eCommerce']

// Note: to add a project 1. add description to array works[] in Work.jsx, 2. bind fancybox with a project number in projectCard.jsx

const works = [
    {
      imgSrc: '/images/crwn-clothing.png',
      title: 'Clothing Store App',
      tags: ['Development', 'API', 'eCommerce'],
      projectLinks: ['https://github.com/hkuchynski/e-commerce-project', 'https://kuchynski-shop.netlify.app/', '/images/crwn-clothing.gif'],
      dataCaption: "eCommerce app built with React, React Dom, Redux, Redux Persist, Firebase, Stripe API. Design credit to Andrei Neagoie and Yihua Zhang.",
      project: '1'
    },
    {
      imgSrc: '/images/ARCoreNav.png',
      title: 'Indoor Navigation App',
      tags: ['Development', 'ARCore', 'API'],
      projectLinks: ['https://github.com/hkuchynski/Indoor-Navigation-ARCore', 'https://drive.google.com/file/d/1aOgRdCclyzSEfzeBDCU_U1xVcjSofOvg/view', '/images/ARCoreNav.png'],
      dataCaption: "This is an Android navigation app built in Unity3D using Google ARCore. It features mapping, localization and navigation as part of assistive technology for BVI and ASD people. It was implemented with Google’s ARCore platform for building augmented reality experiences. The app uses A* Pathfinding algorithm to find the shortest path for the navigation. It facilitates the navigation by adding navigation voice commands. Utilized: Google ARCore, C#, Unity3D, NavMesh, Google Speech API",
      project: '2'
    },
    {
      imgSrc: '/images/proshop.png',
      title: 'eCommerce Platform',
      tags: ['Development', 'API', 'eCommerce'],
      projectLinks: ['https://github.com/hkuchynski/proshop-ecommerce', 'https://proshop-ecommerce-vo8m.onrender.com/', '/images/proshop.gif'],
      dataCaption: "eCommerce platform built with the MERN stack & Redux. Design credit to Brad Traversy.",
      project: '3'
    },
    {
      imgSrc: '/images/natours.png',
      title: 'Tours Services Site',
      tags: ['Web-design', 'Development'],
      projectLinks: ['https://github.com/hkuchynski/natours', 'https://hkuchynski.github.io/natours/', '/images/natours.gif'],
      dataCaption: "This is a one-page landing site of a company that offers tours in the nature built with HTML5 and Sass.",
      project: '4'
    },
    {
      imgSrc: '/images/nexter.png',
      title: 'Real Estate Site',
      tags: ['Web-design', 'Development'],
      projectLinks: ['https://github.com/hkuchynski/nexter', 'https://hkuchynski.github.io/nexter/', '/images/nexter.gif'],
      dataCaption: "This is a landing page of a company that sells luxury homes across the world built with HTML5 and Sass.",
      project: '5'
    },
     // {
    //   imgSrc: '/images/therafolio.png',
    //   title: 'Massage Therapist Portfolio',
    //   tags: ['Web-design', 'Development'],
    //   projectLinks: ['https://github.com/hkuchynski/therafolio', 'https://hkuchynski.github.io/therafolio/', '/images/therafolio.gif'],
    //   dataCaption: "This is a one-page portfolio of a massage therapist built with HTML5 and Sass.",
    //   project: '4'
    // },
    // {
    //   imgSrc: '/images/omnifood.jpg',
    //   title: 'Food Service Site',
    //   tags: ['Web-design', 'Development'],
    //   projectLinks: ['https://github.com/hkuchynski/omnifood', 'https://hkuchynski.github.io/omnifood/', '/images/omnifood.gif'],
    //   dataCaption: "This is a one-page landing site of a food service company build with HTML5 and CSS3.",
    //   project: '5'
    // },
];

const Work = () => {
  return (
    <section 
        id="work"
        className="section"
    >
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLinks, dataCaption, project }, key) => (
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLinks={projectLinks}
                        dataCaption={dataCaption}
                        classes="reveal-up"
                        project={project}
                    />
                ))}
            </div>
        </div>

    </section>
  )
}

export default Work