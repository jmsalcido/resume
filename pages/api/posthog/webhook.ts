import { buffer } from 'micro'
import { NextApiRequest, NextApiResponse } from "next";
import { getTelegramService } from '../../../src/telegram';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const body = (await buffer(req)).toString()
    const data = JSON.parse(body)
    getTelegramService().sendMessage(`Webhook hit: ${data.text}`)
    res.json({status: 'ok'})
}

export const config = {
    api: {
      bodyParser: false,
    },
  }