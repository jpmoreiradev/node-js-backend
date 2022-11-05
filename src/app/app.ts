require('dotenv/config')
import { Telegraf} from'telegraf';

const bot  = new Telegraf(process.env.TELEGRAM_KEY as string)



bot.command("cortar",(ctx: any) => {ctx.reply("RAMDAMDAMDAMDAMPOWPOWPOWPOWPOW")})

bot.launch()
