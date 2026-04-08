import { getMonthImage } from './src/utils/imageUrls.js';
import https from 'https';

const checkUrl = (url, month) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(`Month ${month} (${url}): ${res.statusCode}`);
    }).on('error', (e) => resolve(`Month ${month} Error: ${e.message}`));
  });
};

async function test() {
  for (let i = 0; i < 12; i++) {
    const url = getMonthImage(i);
    console.log(await checkUrl(url, i));
  }
}
test();
