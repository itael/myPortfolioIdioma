import './index.css';

const TechSkillDiv = ({ skillImageURL, skillName }) => {
    return (
        <li className="flex flex-col items-center p-2 rounded-md bg-gray-800 dark:bg-sky-100 border-sky-500 border-2 text-blue-600 dark:text-blue-500 skill-icon">
            <div className='flex items-center h-24'>
                <img src={skillImageURL} width="70" alt={skillName}></img>
            </div>
            <p className="font-medium text-white dark:text-gray-900 mt-2">{skillName}</p>
        </li>
    )
}

export default TechSkillDiv