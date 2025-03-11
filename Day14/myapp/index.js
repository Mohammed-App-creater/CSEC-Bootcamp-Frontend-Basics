const express = require("express");
const dotenv = require("dotenv");
const jobRoute = require("./Routes/jobRoute.js");
const authRoute = require("./Routes/authRoute.js");
const refreshTokenRoute = require("./Routes/refreshTokenRoute");
const connectDB = require("./config/db.js");
const cors = require("cors");
const corsOptions = require("./config/corsOptions.js");
const credentials = require("./middleware/credentials.js");
const loggerRoute = require("./Routes/logerRoute.js");
const verifyJWT = require("./middleware/verifyJWT.js");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000; 
app.use(loggerRoute);
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/api/jobs', jobRoute);
app.use('/auth', authRoute);
app.use('/refresh', refreshTokenRoute);
app.get('/test', verifyJWT, (req, res) => {
  res.send('Welcome to Job Board API JWT');
});

app.get('/', (req, res) => {
  res.send('Welcome to Job Board API');
});

(async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
})();


