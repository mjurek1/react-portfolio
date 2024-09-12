import ResumeCard from '../components/UI/ResumeCard';
import '../pages/ResumePage.css'
import linkedInGitHub from '../assets/linkedin-github.png'

const resume = [
    {
        imgSrc:linkedInGitHub,
        title: 'Resume Resources',
        text: 'Please find my LinkedIn and GitHub profiles below',
        repoLink:'https://github.com/mjurek1',
        deployedLink:'https://www.linkedin.com/in/michael-jurek-2b349899/'
    }
]


function ResumePage() {
    return (
        <div className="container pt-4">
            <p>
                In lieu of a formal resume, please find my LinkedIn and GitHub profiles below!
            </p>
            <section className='projectWrapper'>
      {resume.map((resume, index) => (
        <ResumeCard 
          key={index}
          imgSrc={resume.imgSrc} 
          title={resume.title} 
          text={resume.text} 
          repoLink={resume.repoLink}
          deployedLink={resume.deployedLink}
        />
      ))}
    </section>
    </div>
  );
}

export default ResumePage;