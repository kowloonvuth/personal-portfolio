import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e487a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2020 - 2021'
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        <h3 className='vertical-timeline-element-title'>
          Finish National Examination at Somdech Techno Hun Sen Suong, Tboung Kmum.
        </h3>
        <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2021 - '
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
        <h3 className='vertical-timeline-element-title'>
          Entry into The Roayl University of Phnom Penh [RUPP] & The Institute of Foreign Langugaes [IFL]
        </h3>
        <p>Currently doing an undergraduate in computer science and professional English communication field</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
