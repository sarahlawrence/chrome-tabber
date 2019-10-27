import * as React from 'react';

import { ImageObj } from './@types/global';
import { fetchImage } from './lib/fetchImage';
import Attribution from './components/attribution';
import Background from './components/background';
import Quote from './components/quote';
import Loading from './components/loading';

interface Props {}
interface State {
  image: ImageObj;
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      image: {
        photographerName: '',
        photographerUsername: '',
        url: '',
        color: '',
      },
    };
  }

  async componentDidMount() {
    const fetchedImage = await fetchImage();

    fetchedImage && this.setState({ image: fetchedImage });
  }

  render() {
    const { image } = this.state;
    return image.url ? (
      <Background imageUrl={image.url}>
        <Quote text="Not all those who wander are lost" color={image.color} />
        <Attribution
          username={image.photographerUsername}
          name={image.photographerName}
        />
      </Background>
    ) : (
      <Loading />
    );
  }
}
