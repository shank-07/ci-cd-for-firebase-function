const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.dummyfunction = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.status(200).json({
      status:  "SUCCESS",
      message : "dummy fuintion for ci cd"
  });
  return;
});
