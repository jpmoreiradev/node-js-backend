import express from 'express';
import { CoursesRequire } from '../@types/Courses';
const router = express.Router();


const listCourses: CoursesRequire[]  = []

router.get('/', (req, res) => {
  res.json(listCourses)
})

router.post('/', (req, res) => {
  const { courseName } = req.body
  if(!courseName) {
    
    res.status(500).send('Fail / Course = undefined')
  }
  listCourses.push(courseName)
  res.json({
    message: "Course add with success",
    listCourses
  })
})

export default router;