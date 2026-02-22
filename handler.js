const sumRequestHandler = require("./sum").sumrequstHandler;

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  // 1. Home Route
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write('<html><body><h1>404 page does not exist</h1><a href="/calculator">Go to Calculator</a></body></html>');
    return res.end();
  } 

  // 2. POST Logic ko upar le aao (Taaki Calculate button kaam kare)
  if (req.url.toLowerCase() === "/calculator" && req.method === "POST") {
    return sumRequestHandler(req, res);
  }

  // 3. GET Logic (Sirf page dikhane ke liye)
  if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <body>
          <h1>Welcome to Calculator</h1>
          <form action="/calculator" method="POST">
            <input type="text" placeholder="Enter first" name="first" />
            <input type="text" placeholder="Enter second" name="second" />
            <input type="submit" value="Calculate" />
          </form>
        </body>
      </html>`);
    return res.end();
  }
};

exports.requestHandler = requestHandler;
