import * as React from 'react';

interface Props {
  text: string;
  color: string;
}

export default ({ text, color }: Props) => {
  console.log('color', color);
  const a = {
    fontFamily: 'Beth Ellen',
    fontSize: 50,
    color,
  };
  return (
    <div style={style.container}>
      <p style={a}>{text}</p>
    </div>
  );
};

const style = {
  container: {
    flex: 1,
    margin: 20,
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Beth Ellen',
    fontSize: 50,
  },
};
