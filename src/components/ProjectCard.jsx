/**
 * Node modules
 */
import PropTypes from "prop-types";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


const ProjectCard = ( {imgSrc, title, tags, projectLinks, classes, dataCaption, project} ) => {
  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes}>
        <a href={projectLinks[1]} target="_blank">
            <figure className="img-box aspect-square rounded-lg mb-4">
                <img 
                    src={imgSrc}
                    alt={title}
                    loading='lazy'
                    className="img-cover" 
                />
            </figure>
        </a>

        <div className="flex items-center justify-between gap-4">

            <div className="">
                <h3 className="title-1 mb-3">
                    {title}
                </h3>

                <div className="flex flex-wrap items-center gap-2">
                    {tags.map((label, key) => (
                        <span
                            key={key}
                            className="h-8 text-sm text-zinc-400 bg-zinc-50/5
                            grid items-center px-3 rounded-lg"
                        >
                            {label}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-2 mt-3">
                    <a
                        href={projectLinks[0]}
                        target="_blank"
                        className="w-10 h-10 grid place-items-center rounded-lg transition-[background-color,color]
                        bg-sky-400 text-zinc-950 hover:bg-sky-300 shrink-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
                        </svg>
                    </a>

                    <a
                        href={projectLinks[1]}
                        target="_blank"
                        className="w-10 h-10 grid place-items-center rounded-lg transition-[background-color,color]
                        bg-sky-400 text-zinc-950 hover:bg-sky-300 shrink-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>

                    </a>

                    <a
                        href={projectLinks[2]}
                        className="w-10 h-10 grid place-items-center rounded-lg transition-[background-color,color]
                        bg-sky-400 text-zinc-950 hover:bg-sky-300 shrink-0"
                        data-fancybox={`project-${project}`} data-caption={dataCaption}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </a>
                </div>
            </div>
         
        </div>

    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
}

Fancybox.bind('[data-fancybox="project-1"]');
Fancybox.bind('[data-fancybox="project-2"]');
Fancybox.bind('[data-fancybox="project-3"]');
Fancybox.bind('[data-fancybox="project-4"]');
Fancybox.bind('[data-fancybox="project-5"]');
Fancybox.bind('[data-fancybox="project-6"]');


export default ProjectCard

