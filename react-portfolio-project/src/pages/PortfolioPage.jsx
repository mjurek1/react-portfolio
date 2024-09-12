import ProjectCard from '../components/UI/ProjectCard';
import '../pages/PortfolioPage.css';
import ZenGarden from '../assets/zenGarden.png'
import FlickitySplit from '../assets/movieIcon.png'

const projects = [
  {
    imgSrc: FlickitySplit,
    title: 'Flickity Spllit',
    text: 'This application brings the power and magic of Hollywood to your fingertips',
    repoLink: 'https://github.com/fsfbootcampproject1group6/fsf-project1-group6',
    deployedLink: 'https://fsfbootcampproject1group6.github.io/fsf-project1-group6/'
  },
  {
    imgSrc: ZenGarden,
    title: 'Zen Garden',
    text: 'This application enables you to create a virtual zen garden to de-stress from your daily life.',
    repoLink: 'https://github.com/Group-One-FSF-Project-2/zenGarden',
    deployedLink: ''
  },
];

function Projects() {
  return (
    <div className="container pt-4">
        <p>
          Over the past six months I have had the opportunity to work on many different skills
          from front end development, to back end development and full stack opportunities.  Some of the work I have 
          been able to complete either by myself or with a group is shown below. 
         </p>
   <section className='projectWrapper'>
      {projects.map((project, index) => (
        <ProjectCard 
          key={index}
          imgSrc={project.imgSrc} 
          title={project.title} 
          text={project.text} 
          repoLink={project.repoLink}
          deployedLink={project.deployedLink}
        />
      ))}
    </section>
    </div>
  );
}

export default Projects;
  