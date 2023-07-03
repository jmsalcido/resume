import { Telegraf } from 'telegraf';

export interface TelegramServiceType {
    sendMessage: (message: string) => {}
}

export const TelegramService = (botToken: string) => {
    const bot = new Telegraf(botToken)
    bot.launch();

    const sendMessage = (message: string) => {
        bot.telegram.sendMessage(process.env.TELEGRAM_TO_ID!!, message);
    }

    return {
        sendMessage
    } as TelegramServiceType
}