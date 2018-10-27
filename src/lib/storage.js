var moment = require("moment");

const URL_KEY = "chrome_tabber_url";
const DATE_KEY = "chrome_tabber_date";

export function getImage() {
  return new Promise(resolve => {
    chrome.storage.local.get([URL_KEY], function(urlRes) {
      const url = urlRes[URL_KEY];

      chrome.storage.local.get([DATE_KEY], function(dateRes) {
        const datestamp = dateRes[URL_KEY];

        if (url && datestamp) {
          resolve({
            url,
            datestamp
          });
        }

        resolve(null);
      });
    });
  });
}

function saveToCache(imageUrl, currentDate) {
  return new Promise(resolve => {
    chrome.storage.local.set({ DATE_KEY: currentDate }, function() {
      chrome.storage.local.set({ URL_KEY: imageUrl }, function() {
        resolve();
      });
    });
  });
}

export async function setImage(imageUrl) {
  const currentDate = new Date().toString();
  const savedImage = await getImage();
  if (
    !savedImage ||
    (!!savedImage && hasTimeoutElapsed(savedImage.datestamp, currentDate))
  ) {
    await saveToCache(imageUrl, currentDate);
  }
}

export function hasTimeoutElapsed(oldDate, currentDate) {
  const old = moment(oldDate);
  const current = moment(currentDate);
  const timeout = 1000 * 60 * 5;

  return current.diff(old) > timeout;
}
