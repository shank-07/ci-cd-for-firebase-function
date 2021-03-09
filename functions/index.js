const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.dummyfunction1 = functions.https.onRequest((request, response) => {
  functions.logger.info("Dummy Function 1", {structuredData: true});

  const {data1, data2 } = request.body;

  console.log(data1);
  console.log(data2);

  response.status(200).json({
      status:  "SUCCESS",
      message : "this is cloud function 1",
      msg: "req_1"
  });
  return;
});

exports.dummyfunction2 = functions.https.onRequest((request, response) => {
  functions.logger.info("Dummy Function 2", {structuredData: true});

  const {data1, data2 } = request.body;

  console.log(data1);
  console.log(data2);

  response.status(200).json({
      status:  "SUCCESS",
      message : "this is cloud function 2",
      msg: "req_2"
  });
  return;
});
