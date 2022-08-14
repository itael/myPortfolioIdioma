import { useTranslation } from "react-i18next";
import AccordionElement from "../../atoms/AccordionElement";
import TechSkillDiv from "../../atoms/TechSkillDiv";
import ProyectCard from "../ProyectCard";
import './index.css';

const programmingSkills = [
  [
    { name: "HTML", url: "https://i.imgur.com/2wXTK3p.png" },
    { name: "CSS", url: "https://i.imgur.com/k5cd2Ib.png" },
    { name: "Javascript", url: "https://i.imgur.com/EG6ivkS.png" },
    { name: "React JS", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" },
    { name: "Cypress", url: "https://iconape.com/wp-content/files/gj/370774/svg/370774.svg" },
    { name: "Tailwind", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" }
  ],
  [
    { name: "PostgreSQL", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png" },
    { name: "Node.js", url: "https://i.imgur.com/Adm61QJ.png" },
    { name: "Express", url: "https://i.imgur.com/Dq95cEV.png" },
    { name: "Jest", url: "https://i.imgur.com/Pbg8DoE.png" }
  ],
  [
    { name: "Java", url: "https://i.imgur.com/L5tCbcL.png" },
    { name: "R", url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Rlogo.png" },
    { name: "Octave", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gnu-octave-logo.svg/1024px-Gnu-octave-logo.svg.png" },
    { name: "C++", url: "https://i.imgur.com/FNrHsOi.png" },
    { name: "Python", url: "https://i.imgur.com/zeV4t3n.png" },
    { name: "Assembly", url: "https://i.imgur.com/KkNKLpm.png" }
  ]
]

const AccordionDiv = ({ accordionElementNames, projectsArray, projectLevelsDescription, isProyects = false }) => {
  const [t] = useTranslation('global');
  return (
    <div id="accordion-color" data-accordion="collapse" className={"mt-4 " + (isProyects ? "mx-[-0.85rem] xsm:hidden" : "")} data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
      <AccordionElement isProyects={isProyects} title={isProyects ? accordionElementNames[0] : 'Frontend'} index={1}>
        <p className="mb-2">{isProyects ? projectLevelsDescription[0] : t('skills.front')}</p>
        {
          !isProyects
            ? <ul className="mt-5 list-none text-gray-500 dark:text-gray-400 grid grid-cols-auto-fill-skills gap-4">
              {programmingSkills[0].map(skill => <TechSkillDiv key={skill.name} skillName={skill.name} skillImageURL={skill.url} />)}
            </ul>
            : <div className="grid grid-cols-1 gap-4 mt-5">
              {projectsArray[0].map(el => <ProyectCard key={el.title} imgURL={el.imgUrl} title={el.title} projectURL={el.projectUrl} isDeployed={el.isDeployed} tecnologies={el.tools} />)}
            </div>
        }
      </AccordionElement>
      <AccordionElement isProyects={isProyects} title={isProyects ? accordionElementNames[1] : 'Backend'} index={2}>
        <p className="mb-2">{isProyects ? projectLevelsDescription[1] : t('skills.back')}</p>
        {
          !isProyects
            ? <ul className="mt-5 list-none text-gray-500 dark:text-gray-400 grid grid-cols-auto-fill-skills gap-4">
              {programmingSkills[1].map(skill => <TechSkillDiv key={skill.name} skillName={skill.name} skillImageURL={skill.url} />)}
            </ul>
            : <div className="grid grid-cols-1 gap-4 mt-5">
              {projectsArray[1].map(el => <ProyectCard key={el.title} imgURL={el.imgUrl} title={el.title} projectURL={el.projectUrl} isDeployed={el.isDeployed} tecnologies={el.tools} />)}
            </div>
        }
      </AccordionElement>

      <AccordionElement isProyects={isProyects} title={isProyects ? accordionElementNames[2] : 'Extra'} index={3} isFinal={true}>
        <p className="mb-2">{isProyects ? projectLevelsDescription[2] : t('skills.extra')}</p>
        {
          !isProyects
            ? <ul className="mt-5 list-none text-gray-500 dark:text-gray-400 grid grid-cols-auto-fill-skills gap-4">
              {programmingSkills[2].map(skill => <TechSkillDiv key={skill.name} skillName={skill.name} skillImageURL={skill.url} />)}
            </ul>
            : <div className="grid grid-cols-1 gap-4 mt-5">
              {projectsArray[2].map(el => <ProyectCard key={el.title} imgURL={el.imgUrl} title={el.title} projectURL={el.projectUrl} isDeployed={el.isDeployed} tecnologies={el.tools} />)}
            </div>
        }
      </AccordionElement>
    </div>
  );
}

export default AccordionDiv;