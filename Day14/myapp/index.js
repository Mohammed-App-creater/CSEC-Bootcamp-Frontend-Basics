const express = require("express");
const dotenv = require("dotenv");
const jobRoute = require("./Routes/jobRoute.js");
const authRoute = require("./Routes/authRoute.js");
const connectDB = require("./config/db.js");
const cors = require("cors");
const corsOptions = require("./config/corsOptions.js");
const loggerRoute = require("./Routes/logerRoute.js");

dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 3000; 
app.use(loggerRoute);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/api/jobs', jobRoute);
app.use('/auth', authRoute);

app.get('/', (req, res) => {
  res.send('Welcome to Job Board API');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
