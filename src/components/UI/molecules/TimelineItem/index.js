import './index.css';

const TimelineItem = ({ itemTime, itemTitle, itemCareer, itemDescription, itemURL = [] }) => {
  return (
    <div className='timeline-item'>
      <div className='timeline-dot bg-green-400'></div>
      <div className='timeline-date text-green-400'>{itemTime}</div>
      <div className="timeline-content bg-sky-100 dark:bg-sky-900">
        <h3>{itemTitle}</h3>
        <h4 className='underline'>{itemCareer}</h4>
        <ul className="about-me-list text-left text-sm xsm:text-base text-gray-200 my-4">
          {
            itemDescription
              ? itemDescription.map((el, index) => <li key={index} className={'text-sm text-gray-800 dark:text-gray-100 my-1 md:text-base md:my-0'}>{el}</li>)
              : ''
          }
        </ul>
        {
          itemURL.length > 0
          ? <p className='about-me-list text-left mb-3'>
              {itemURL[0]}
              <a href={itemURL[1]} className='underline'>Click Here</a>
            </p>
          : ''
        }
      </div>
    </div>
  );
}

export default TimelineItem;