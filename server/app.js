import express from 'express';
import { skillsRouter } from './src/routes/skills.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.use('/api/v1/skills', skillsRouter);



export default app;