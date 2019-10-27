import * as React from 'react';
import Color from 'color';

interface Props {
  text: string;
  color: string;
}

export default ({ text, color }: Props) => {
  const backgroundColor = Color(color)
    .negate()
    .saturate(0.4);
  const foregroundColor = Color(color);

  const textStyle: React.CSSProperties = {
    ...(style.text as any),
    color: `${foregroundColor}`,
    textShadow: `0 0 20px ${backgroundColor}`,
  };

  return (
    <div style={style.container}>
      <p style={textStyle}>{text}</p>
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
    userSelect: 'none',
  },
};
