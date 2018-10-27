import { ImageObj } from '../@types/global';

export async function fetchImage(): Promise<ImageObj> {
  return {
    url:
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4147a2e4e3f79299e2f0c92b13db9ee&auto=format&fit=crop&w=2468&q=80',
    photographerUsername: 'string',
    photographerName: 'string'
  };
}
