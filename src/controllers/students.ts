import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('students List!')
})

export default router;