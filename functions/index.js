const functions = require('firebase-functions');
const requestPromise = require('request-promise');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.badge = functions.https.onRequest((request, response) => {
  const owner = request.query['owner'];
  const repo = request.query['repo'];

  fetchLanguagesByteSize(owner, repo)
    .then((languages) => {
      let kotlin = 0;
      let total = 0;

      Object.keys(languages).forEach((key) => {
        if (key === 'Kotlin') {
          kotlin = languages[key];
        }

        total += languages[key];
      });

      return Math.floor((kotlin / total) * 10000) / 100;
    }).then((percentage) => {
      const result = { 'kotori_rate': percentage };

      console.log(result);
      return response.status(200).send(JSON.stringify(result));
    }).catch((e) => {
      console.log(e.message);  
      return response.status(500).send(e.message);
    });
});

function fetchLanguagesByteSize(owner, repo) {
  return requestPromise({
    method: 'GET',
    uri: `https://api.github.com/repos/${owner}/${repo}/languages`,
    headers: {
      'User-Agent': 'Request-Promise/KOTORI-badge',
    },
    json: true,
  });
}
