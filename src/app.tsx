import * as React from "react";

import { ImageObj } from "./@types/global";
import { fetchImage } from "./lib/fetchImage";
import Attribution from "./components/attribution";
import Background from "./components/background";

interface Props {}
interface State {
  image: ImageObj;
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      image: {
        photographerName: "",
        photographerUsername: "",
        url: ""
      }
    };
  }

  async componentDidMount() {
    // TODO: check if timeout has elapsed
    const fetchedImage = await fetchImage();
    // TODO: save image to cache

    fetchedImage && this.setState({ image: fetchedImage });
  }

  render() {
    const { image } = this.state;
    return image.url ? (
      <Background imageUrl={image.url}>
        <Attribution
          username={image.photographerUsername}
          name={image.photographerName}
        />
      </Background>
    ) : (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
