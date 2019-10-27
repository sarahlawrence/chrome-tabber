import * as React from 'react';

interface Props {
  imageUrl: string;
}

const IMG_KEY = 'image-element';

export default class Background extends React.Component<Props> {
  render() {
    const { imageUrl } = this.props;

    return (
      <div style={style.container}>
        <img src={imageUrl} style={style.image} id={IMG_KEY} />
        <div style={style.overlay}>{this.props.children}</div>
      </div>
    );
  }
}

const style: any = {
  container: {},
  image: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: window.innerHeight,
    width: window.innerWidth,
    position: 'absolute',
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    height: window.innerHeight,
    width: window.innerWidth,
  },
};
