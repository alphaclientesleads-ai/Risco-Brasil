import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const FB_PIXEL_ID = process.env.VITE_FB_PIXEL_ID || '1446992423551887';
const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

app.post('/api/fb-event', async (req, res) => {
  const { event_name, event_source_url, user_data, custom_data } = req.body;

  if (!FB_ACCESS_TOKEN) {
    console.error('FB_ACCESS_TOKEN not found in environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const payload = {
    data: [
      {
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url,
        user_data: {
          client_ip_address: req.ip,
          client_user_agent: req.headers['user-agent'],
          ...user_data
        },
        custom_data
      }
    ]
  };

  try {
    const response = await fetch(`https://graph.facebook.com/v17.0/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    console.log('Meta CAPI Response:', result);
    res.json(result);
  } catch (error) {
    console.error('Meta CAPI Error:', error);
    res.status(500).json({ error: 'Failed to send event to Meta' });
  }
});

app.listen(port, () => {
  console.log(`CAPI Proxy Server running at http://localhost:${port}`);
});
