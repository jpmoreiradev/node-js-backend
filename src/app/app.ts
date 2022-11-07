import { Telegraf } from 'telegraf';
import { MyContext } from '../@types/MyContext';

const bot = new Telegraf<MyContext>(process.env.TELEGRAM_KEY as string);
bot.start((ctx) => ctx.reply('Welcome'));
bot.launch();

export default bot;