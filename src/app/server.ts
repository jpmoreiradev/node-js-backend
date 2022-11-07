
import express from "express";
import bot from './app'
import  logger   from "./config/logger";

const app = express();

const PORT = process.env.PORT || 3000


app.get('/:message', (req, res) => {
  const { message } = req.params;
  
  bot.on('text', (ctx) => ctx.reply(message));

  res.status(200).json({
    code: 200,
    message
  })
})

app.listen(PORT, () => {
  logger.info('Bot is running');
})

