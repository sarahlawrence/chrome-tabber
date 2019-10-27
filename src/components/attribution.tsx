import * as React from "react";

import config from "../config";

interface Props {
  username: string;
  name: string;
}

export default class Attribution extends React.Component<Props> {
  render() {
    const { username, name } = this.props;
    const utmCode = `?utm_source=${
      config().unsplashAppName
    }&utm_medium=referral`;

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
  container: {},
  text: {
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5
  }
};
