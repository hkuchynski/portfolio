/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/forkify.png',
      title: 'Recipe Search App',
      tags: ['Web-design', 'Development'],
      projectLinks: ['https://github.com/hkuchynski/forkify', 'https://google.com/', '/images/forkify.gif'],
      dataCaption: "Small recipe search app built with React, Redux, Redux Saga, Redux Persist. Design credit to Jonas Schmedtmann.",
      project: '1'
    },
    {
      imgSrc: '/images/therafolio.png',
      title: 'Massage Therapist Portfolio',
      tags: ['Web-design', 'Development'],
      projectLinks: ['https://github.com/hkuchynski/therafolio', 'https://google.com/', '/images/therafolio.gif'],
      dataCaption: "This is a one-page portfolio of a massage therapist built with HTML5 and Sass.",
      project: '2'
    },
    {
      imgSrc: '/images/omnifood.png',
      title: 'Food Service Site',
      tags: ['Web-design', 'Development'],
      projectLinks: ['https://github.com/hkuchynski/omnifood', 'https://google.com/', '/images/omnifood.gif'],
      dataCaption: "This is a one-page landing site of a food service company build with HTML5 and CSS3.",
      project: '3'
    },
    {
      imgSrc: '/images/budgety.png',
      title: 'Budget App',
      tags: ['Web-design', 'Development'],
      projectLinks: ['https://github.com/hkuchynski/budgety', 'https://google.com/', '/images/budgety.gif'],
      dataCaption: "A web app to manage your budget made with HTML, CSS, Javascript.",
      project: '4'
    }
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