import express from "express";
import  logger   from "../config/logger";

const app = express();



app.get('/', (req, res ) => {
 res.send('Hello World')
})

app.listen(3000, () => {
  logger.info('Serve is running');
})