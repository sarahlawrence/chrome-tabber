import * as React from 'react';

import { parseZone as moment } from 'moment';

export default () => {
  const currentTime = moment(new Date());
  return (
    <div>
      <p style={style.time}>{currentTime.format('h:mm A')}</p>
      <p style={style.day}>{currentTime.format('dddd')}</p>
      <p style={style.date}>{currentTime.format('Do MMM')}</p>
    </div>
  );
};

const style = {
  time: {
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    color: 'white'
  },
  day: {
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    color: 'white'
  },
  date: {
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    color: 'white'
  }
};
