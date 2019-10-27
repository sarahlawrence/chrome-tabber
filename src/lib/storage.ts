import { ImageObj } from '../@types/global';

const IMAGE_KEY = 'chrome_tabber_image';
const DATE_KEY = 'chrome_tabber_date';

interface CacheObj {
  image: ImageObj;
  datestamp: number;
}

export async function getImage(): Promise<CacheObj | null> {
  const savedImage = await getFromCache();
  if (!savedImage || hasTimeoutElapsed(savedImage.datestamp)) {
    return null;
  }
  return savedImage;
}

function getFromCache(): Promise<CacheObj | null> {
  return new Promise(resolve => {
    chrome.storage.local.get([IMAGE_KEY], function(imageRes) {
      const image: ImageObj = imageRes[IMAGE_KEY];

      chrome.storage.local.get([DATE_KEY], function(dateRes) {
        const datestamp: number = dateRes[DATE_KEY];

        if (image && datestamp) {
          const obj: CacheObj = {
            image,
            datestamp,
          };
          resolve(obj);
        }

        resolve(null);
      });
    });
  });
}

function saveToCache(image: ImageObj, currentDate: number) {
  return new Promise(resolve => {
    chrome.storage.local.set({ [DATE_KEY]: currentDate }, function() {
      chrome.storage.local.set({ [IMAGE_KEY]: image }, function() {
        resolve();
      });
    });
  });
}

export async function setImage(image: ImageObj) {
  const currentDate = Date.now();
  await saveToCache(image, currentDate);
}

export function hasTimeoutElapsed(oldDate: number) {
  const currentDate = Date.now();
  const timeout = 1000 * 60 * 30; // 30 minutes
  return currentDate >= oldDate + timeout;
}
