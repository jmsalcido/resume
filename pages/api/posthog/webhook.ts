import { buffer } from 'micro'
import { NextApiRequest, NextApiResponse } from "next";
import { getTelegramService } from '../../../src/telegram';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.url || !req.method || req.method !== 'POST') {
    res.status(422)
    res.json({ error: 'Wrong request' })
    return
  }
  const parsedReq = new URL(req.url, `https://${req.headers.host}`); 

  const telegramService = getTelegramService()

  const token = parsedReq.searchParams.get('token')
  if (token !== process.env.POSTHOG_WEBHOOK_TOKEN) {
    res.status(403)
    res.json({ error: 'Forbidden Access, this incident will be reported.' })
    console.error(`Forbidden Access, tried with: ${token}`)
    return
  }

  const body = (await buffer(req)).toString()
  const data = JSON.parse(body)

  if (!data.text) {
    res.status(200)
    res.json({ message: 'ok' })
    return
  }

  // at this point just send the message
  telegramService.sendMessage(`Webhook hit: ${data.text}`)
  res.json({ message: 'ok' })
}

export const config = {
  api: {
    bodyParser: false,
  },
}