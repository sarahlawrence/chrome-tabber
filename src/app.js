import React from "react";

import { fetchImage } from "./lib/fetchImage";
import { getImage, setImage } from "./lib/storage";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: ""
    };
  }

  async componentDidMount() {
    let imageUrl = await getImage().url;
    if (!imageUrl) {
      imageUrl = await fetchImage();
      await setImage(imageUrl);
    }

    this.setState({ imageUrl });
  }

  render() {
    const { imageUrl } = this.state;
    return imageUrl ? (
      <div>
        <p>Hello world</p>
      </div>
    ) : (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
