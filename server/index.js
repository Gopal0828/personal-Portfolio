import app from './app.js';
import { config } from 'dotenv';
import connectDB from './src/database/data.base.js';

config({
    path: './.env',
})


const PORT = process.env.PORT || 4000;
connectDB()

.then(() => {
    app.listen(4000, () => {
        console.log(`⚙️ ⚙️Server is running on port  ${PORT} ⚙️ ⚙️ 
            \t the path is http://localhost:${PORT}`);
    })
})


.catch((error) => {
    console.log(" 🚨 🚨 Error in Express Server 🚨 🚨 =>  ", error);
});

