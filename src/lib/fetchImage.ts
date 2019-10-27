import Unsplash from 'unsplash-js';

import { ImageObj } from '../@types/global';
import { getImage, setImage } from './storage';
import { ACCESS_KEY } from '../keys';
import { UnsplashResponse } from '../@types/api';

export async function fetchImage(): Promise<ImageObj> {
  const savedData = await getLocalImage();
  if (savedData) {
    return savedData.image;
  }
  return await getRemoteImage();
}

async function getLocalImage() {
  return await getImage();
}
async function getRemoteImage() {
  const res = await getImageFromApi();
  const image = transformImage(res);
  await setImage(image);
  return image;
}

async function getImageFromApi(): Promise<UnsplashResponse> {
  console.log('FETCHING FROM API');
  const unsplash = new Unsplash({
    // @ts-ignore
    accessKey: ACCESS_KEY,
  });

  try {
    const res = await unsplash.photos.getRandomPhoto({
      width: window.innerWidth,
      height: window.innerHeight,
      query: 'travel',
    });

    return (await res.json()) as UnsplashResponse;
  } catch (err) {
    console.log('ERR:', err);
    return Promise.reject(err);
  }
}

function transformImage(raw: UnsplashResponse): ImageObj {
  return {
    url: raw.urls.full,
    photographerUsername: raw.user.username,
    photographerName: raw.user.name,
  };
}
