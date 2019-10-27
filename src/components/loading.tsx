import * as React from 'react';

export default () => (
  <div style={style.container}>
    <p style={style.text}>Loading...</p>
  </div>
);

const style = {
  container: {
    display: 'flex',
    height: window.innerHeight,
    width: window.innerWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    fontSize: 30,
  },
};
