const functions = require("firebase-functions");


exports.set = functions.https.onRequest((request, response) => {
  functions.logger.info("Dummy Function 1", {structuredData: true});

  //  get number
  const number = request.body.number;


  response.status(200).json({
      status:  "SUCCESS",
      number : number,
      msg: "f1",
      result : number

  });
  return;
});

exports.mul = functions.https.onRequest((request, response) => {
  functions.logger.info("Dummy Function 2", {structuredData: true});

  //  multiple number
  const number = request.body.number;

  let result = number * number;
  console.log(result);

  response.status(200).json({
      status:  "SUCCESS",
      number : number,
      msg: "f2",
      result : result
  });
  return;
});

exports.div = functions.https.onRequest((request, response) => {
  functions.logger.info("Dummy Function 3", {structuredData: true});

  //  divide number
  const number = request.body.number;

  let result = number / number;


  response.status(200).json({
      status:  "SUCCESS",
      number : number,
      msg: "f3",
      result : result
  });
  return;

});
