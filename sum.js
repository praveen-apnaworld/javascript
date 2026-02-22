const sumRequestHandler = (req, res) => {
  console.log("sum request handler called", req.url);
  const body = [];
  req.on('data', (chunk) => body.push(chunk));
  req.on('end', () => {
   const bodyString = Buffer.concat(body).toString();
  const params = new URLSearchParams(bodyString);
  const bodyobj = Object.fromEntries(params);
  const result = Number(bodyobj.first) + Number(bodyobj.second);
  console.log(result);

  });



}


exports.sumRequestHandler = sumRequestHandler;