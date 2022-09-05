import express from 'express';
import coursesRouter from './controllers/courses';
import studentsRouter from './controllers/students';


const router = express.Router();

router.get('/', (req, res) => {
  res.send('Serve is running')
})

router.use('/courses', coursesRouter)

router.use('/students', studentsRouter)

export default router;