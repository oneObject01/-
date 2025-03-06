const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.config');
const authRoutes = require('./routes/authRoutes');
const recordRoutes = require('./routes/recordRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(cors
    ({ origin: 'http://localhost:5173', credentials: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
// 这行代码将 authRoutes 挂载到 /api/auth 路径下
app.use('/api/auth', authRoutes); 
app.use('/api/record', recordRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});