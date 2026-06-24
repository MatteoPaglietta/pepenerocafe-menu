const HOST = 'pepenerocafe-menu.netlify.app';
const KEY = '147bebdf46504df318683787e04529c3';
const URL_LIST = [`https://${HOST}/`];

fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: URL_LIST,
  }),
})
  .then((res) => {
    console.log('IndexNow response:', res.status, res.statusText);
    return res.text();
  })
  .then((body) => body && console.log(body))
  .catch((err) => console.error('IndexNow ping failed:', err));
