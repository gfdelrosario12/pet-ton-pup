// api/telegram-bot.js

const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_API_TOKEN);

bot.start((ctx) => {
  ctx.reply('Welcome to my Web App!', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Open Web App',
            web_app: {
              url: process.env.TELEGRAM_WEB_APP_URL, // The URL of your Next.js app
            },
          },
        ],
      ],
    },
  });
});

// Vercel Serverless Function handler
module.exports = async (req, res) => {
  if (req.method === 'POST') {
    await bot.handleUpdate(req.body, res); // Handle the update from Telegram
    res.status(200).send('OK');
  } else {
    res.status(404).send('Not Found');
  }
};
