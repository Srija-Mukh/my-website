import React from 'react';
import './styles/Timeline.css';
import timelineElements from '../data/timelineElements';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
  // let iconStyles = {
  //   background: '#841376',
  // };

  return (
    <div style={{ margin: '20px' }}>
      <VerticalTimeline>
        {timelineElements.map((e) => {
          // let WorkIcon = e.icon === 'work';
          return (
            <VerticalTimelineElement
              key={e.id}
              date={e.date}
              dateClassName='date'
              iconStyle={{
                backgroundImage: `url(${e.icon})`,
                backgroundSize: 'cover',
              }}
              // icon={<img class='icon-img' src={e.icon}/>}
            >
              <h4 className='vertical-timeline-element-title'>{e.title}</h4>
              <h5 className='vertical-timeline-element-subtitle'>
                {e.description}
              </h5>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
