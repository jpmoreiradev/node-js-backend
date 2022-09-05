import express from "express";
import routes from "../routes";
import  logger   from "../config/logger";


const app = express();
const PORT = process.env.PORT || 3333

app.use(express.json())

app.use('/', routes)

app.listen(PORT, () => {
  logger.info('Serve is running');
})

 