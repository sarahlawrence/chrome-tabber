import * as React from 'react';

interface Props {
  username: string;
  name: string;
}

const unsplashAppName = 'chrome_tabber';

export default class Attribution extends React.Component<Props> {
  render() {
    const { username, name } = this.props;
    const utmCode = `?utm_source=${unsplashAppName}&utm_medium=referral`;

    return (
      <div style={style.container}>
        <p style={style.text}>
          {`Photo by `}
          <a
            href={`https://unsplash.com/@${username}${utmCode}`}
            style={style.text}
          >
            {`${name}`}
          </a>
          {` on `}
          <a href={`https://unsplash.com/${utmCode}`} style={style.text}>
            Unsplash
          </a>
        </p>
      </div>
    );
  }
}

const style = {
  container: {
    alignSelf: 'flex-end',
    margin: 8,
  },
  text: {
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    color: 'white',
    textShadow: `0 0 10px black`,
  },
};
