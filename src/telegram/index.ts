import { TelegramService, TelegramServiceType } from "./service";

const globalForTelegramService = globalThis as unknown as {
    service: TelegramServiceType | undefined
};

export const getTelegramService = () => {
    if (globalForTelegramService.service) {
        return globalForTelegramService.service;
    }

    globalForTelegramService.service = TelegramService(process.env.TELEGRAM_BOT_TOKEN!!)
    return globalForTelegramService.service
}