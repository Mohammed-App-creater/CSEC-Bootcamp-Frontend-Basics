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
const path = require('path');
const uploadRoutes = require('./Routes/uploadRoute');
const uploadController = require("./controllers/uploadContoller");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000; 
app.use(loggerRoute);
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/Logo', express.static(path.join(__dirname, './View/Logo')));

app.use('/upload', uploadRoutes);
app.use('/auth', authRoute);
app.use('/api/jobs', jobRoute);
app.use('/refresh', refreshTokenRoute);
app.get('/test', verifyJWT, (req, res) => {
  res.send('Welcome to Job Board API JWT');
});
app.get('/', (req, res) => {
  res.send('Welcome to Job Board API');
});
app.use(uploadController.handleError);
(async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
})();


