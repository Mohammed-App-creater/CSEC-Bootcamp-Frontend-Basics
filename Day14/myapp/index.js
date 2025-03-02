const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`<body style="margin: 0; padding: 0; display: flex; flex-direction: column; height: 100vh; background-color: #f3f4f6;">

    <nav style="background-color: #2563eb; color: white; padding: 15px; box-shadow: 0px 4px 6px rgba(0,0,0,0.1);">
        <div style="max-width: 1100px; margin: auto; display: flex; justify-content: space-between; align-items: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">My Website</h1>
            <ul style="list-style: none; display: flex; gap: 20px; margin: 0; padding: 0;">
                <li><a href="/home" style="color: white; text-decoration: none; font-size: 16px;">Home</a></li>
                <li><a href="/about" style="color: white; text-decoration: none; font-size: 16px;">About</a></li>
                <li><a href="/contact" style="color: white; text-decoration: none; font-size: 16px;">Contact</a></li>
                <li><a href="/login" style="color: white; text-decoration: none; font-size: 16px;">Login</a></li>
            </ul>
        </div>
    </nav>

    <div style="flex-grow: 1; display: flex; justify-content: center; align-items: center;">
        <h1 style="font-size: 40px; font-weight: bold; color: #1e40af; background-color: white; padding: 20px 40px; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
            Hello World!
        </h1>
    </div>

</body>`);
});

app.get("/home", (req, res) => {
  res.send(`<body style="margin: 0; padding: 0; display: flex; flex-direction: column; height: 100vh; background-color: #f3f4f6;">
            
        <nav style="background-color: #2563eb; color: white; padding: 15px; box-shadow: 0px 4px 6px rgba(0,0,0,0.1);">
            <div style="max-width: 1100px; margin: auto; display: flex; justify-content: space-between; align-items: center;">
                <h1 style="margin: 0; font-size: 24px; font-weight: bold;">My Website</h1>
                <ul style="list-style: none; display: flex; gap: 20px; margin: 0; padding: 0;">
                    <li><a href="#" style="color: white; text-decoration: none; font-size: 16px;">Home</a></li>
                    <li><a href="#" style="color: white; text-decoration: none; font-size: 16px;">About</a></li>
                    <li><a href="#" style="color: white; text-decoration: none; font-size: 16px;">Contact</a></li>
                    <li><a href="/login" style="color: white; text-decoration: none; font-size: 16px;">Login</a></li>
                </ul>
            </div>
        </nav>
    
        <div style="flex-grow: 1; display: flex; justify-content: center; align-items: center;">
            <h1 style="font-size: 40px; font-weight: bold; color: #1e40af; background-color: white; padding: 20px 40px; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
                Home Page
            </h1>
        </div>
    `);
});

const users = {
  name: "Mohammed  Ismail",
  email: "mahammedismail160@gmail.com",
  password: "1234",
};

app.get("/login", (req, res) => {
  res.send(`
    <body style="font-family: Arial, sans-serif; text-align: center; margin: 0; padding: 0; background-color: #f4f4f4;">
        <form id="loginForm" action="/auth" method="POST">
            <div id="loginPage" style="display: block; margin-top: 100px;">
                <h2>Login</h2>
                <input type="text" name="name" placeholder="Name" id="name" style="padding: 8px; margin: 5px; width: 200px;" required><br>
                <input type="email" name="email" placeholder="Email" id="email" style="padding: 8px; margin: 5px; width: 200px;" required><br>
                <input type="password" name="password" placeholder="Password" id="password" style="padding: 8px; margin: 5px; width: 200px;" required><br>
                <button type="submit" style="padding: 10px 20px; background-color: blue; color: white; border: none; cursor: pointer;">Login</button>
            </div>

            <div id="welcomePage" style="display: none; margin-top: 100px;">
                <h2>Welcome, <span id="userEmail"></span>!</h2>
                <button type="button" id="logoutButton" style="padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer;">Logout</button>
            </div>
        </form>
        
        <script>
            const loginPage = document.getElementById('loginPage');
            const welcomePage = document.getElementById('welcomePage');
            const userEmailSpan = document.getElementById('userEmail');
            const logoutButton = document.getElementById('logoutButton');
            const loginForm = document.getElementById('loginForm');

            // Handle logout button click
            logoutButton.addEventListener('click', () => {
                window.location.href = '/login'; // Redirect to login page
            });
        </script>
    </body>
    `);
});

app.post("/auth", (req, res) => {
  const { name, email, password } = req.body;
  console.log("Login attempt:", req.body);

  if (email && password) {
    users.name = name;
    users.email = email;
    users.password = password;

    res.send(`
            <body style="font-family: Arial, sans-serif; text-align: center; margin: 0; padding: 0; background-color: #f4f4f4;">
                <div id="welcomePage" style="margin-top: 100px;">
                    <h2>Welcome, ${email}!</h2>
                    <button onclick="window.location.href='/login';" style="padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer;">Logout</button>
                </div>
            </body>
        `);
  } else {
    res.send("Invalid login attempt. Please try again.");
  }
});

app.post("/test", (req, res) => {
  console.log("Test request:", req.body);
  res.send("Test successful!");
});

app.post("/submit", (req, res) => {
  const jsonData = req.body;
  console.log(jsonData);
  res.send(
    "JSON data received! " +
      "\n" +
      "Name: " +
      jsonData.name +
      "\n" +
      "Email: " +
      jsonData.email +
      "\n" +
      "Password: " +
      jsonData.password
  );
});

app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

app.get(
  "/example/b",
  (req, res, next) => {
    console.log("the response will be sent by the next function ...");
    next();
  },
  (req, res) => {
    res.send("Hello from B!");
  }
);



app.get("/search", (req, res) => {
  const query = req.query.q; // Extracts 'q' parameter from the URL
  res.send(`You searched for: ${query}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
