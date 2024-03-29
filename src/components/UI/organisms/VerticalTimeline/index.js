import { useTranslation } from 'react-i18next';
import TimelineItem from '../../molecules/TimelineItem';
import './index.css';

const ExperienceDiv = (props) => {
  const [t] = useTranslation('global');

  return (
    <div className="timeline-items">
      {
        t('edu.edu', { returnObjects: true }).map(({educationTime, educationTitle, educationCareer, educationDescription, educationURL}) => (
          <TimelineItem
            key={educationTitle}
            itemTime={educationTime}
            itemCareer={educationCareer}
            itemTitle={educationTitle}
            itemDescription={educationDescription}
            itemURL={educationURL}
          />
        ))
      }
    </div>
  );
}

export default ExperienceDiv;