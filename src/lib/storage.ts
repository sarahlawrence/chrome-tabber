import { parseZone as moment } from 'moment';
import { ImageObj } from '../@types/global';

const IMAGE_KEY = 'chrome_tabber_image';
const DATE_KEY = 'chrome_tabber_date';

interface CacheObj {
  image: ImageObj;
  datestamp: string;
}

export function getImage(): Promise<CacheObj | null> {
  console.log('getting image');
  return new Promise(resolve => {
    chrome.storage.local.get([IMAGE_KEY], function(imageRes) {
      const image: ImageObj = imageRes[IMAGE_KEY];

      chrome.storage.local.get([DATE_KEY], function(dateRes) {
        const datestamp: string = dateRes[DATE_KEY];

        if (image && datestamp) {
          console.log(image, datestamp);
          resolve({
            image,
            datestamp,
          });
        }

        resolve(null);
      });
    });
  });
}

function saveToCache(image: ImageObj, currentDate: string) {
  return new Promise(resolve => {
    chrome.storage.local.set({ [DATE_KEY]: currentDate }, function() {
      chrome.storage.local.set({ [IMAGE_KEY]: image }, function() {
        resolve();
      });
    });
  });
}

export async function setImage(image: ImageObj) {
  const currentDate = new Date().toString();
  const savedImage = await getImage();
  if (
    !savedImage ||
    (!!savedImage && hasTimeoutElapsed(savedImage.datestamp, currentDate))
  ) {
    await saveToCache(image, currentDate);
  }
}

export function hasTimeoutElapsed(oldDate: string, currentDate: string) {
  const old = moment(oldDate);
  const current = moment(currentDate);
  // const timeout = 1000 * 60 * 5;

  return current.diff(old) > 1;
}
