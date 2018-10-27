import * as React from 'react';

import { fetchImage } from './lib/fetchImage';
import { getImage, setImage } from './lib/storage';
import Background from './components/background';

interface Props {}
interface State {
  imageUrl: string;
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      imageUrl: ''
    };
  }

  async componentDidMount() {
    let image = await getImage();
    if (!image) {
      const imageUrl = await fetchImage();
      await setImage(imageUrl);
      image = await getImage();
    }

    image && this.setState({ imageUrl: image.url });
  }

  render() {
    const { imageUrl } = this.state;
    return imageUrl ? (
      <Background imageUrl={imageUrl}>
        <p>Hello world</p>
      </Background>
    ) : (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
