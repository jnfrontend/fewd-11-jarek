const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse form data (JSON request bodies)
app.use(bodyParser.urlencoded({ extended: true })); // false
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('Started Working, Express!');
// });

// Handle form submission
app.post("/submit", (request, response) => {
  const { name, email, message } = request.body;

  console.log("POST form data:", request.body);

  console.log("Form Data Recived:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

//   response.send(`
//     <h1>Test - Form Received</h1>
// `);

  response.send(`
        <h1>Form Received</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});