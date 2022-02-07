import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';
import cors from 'cors';

const port = 3001;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/leagues/:country', async (req, res) => {
  const country = req.params.country;

  const response = await fetch(
    `https://api-football-v1.p.rapidapi.com/v2/leagues/current/${country}`,
    {
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': `${process.env.API_KEY}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  res.send(data.api.leagues);
});

app.get('/api/leagues', async (_req, res) => {
  const response = await fetch(
    'https://api-football-v1.p.rapidapi.com/v3/leagues',
    {
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': `${process.env.API_KEY}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  res.send(data.response);
});

app.get('/api/countries', async (_req, res) => {
  const response = await fetch(
    'https://api-football-v1.p.rapidapi.com/v3/countries',
    {
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': `${process.env.API_KEY}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  res.send(data.response);
});

app.get('/api/rounds/:id', async (req, res) => {
  const id = req.params.id;
  const response = await fetch(
    `https://api-football-v1.p.rapidapi.com/v2/fixtures/rounds/${id}`,
    {
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': `${process.env.API_KEY}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  res.send(data.api.fixtures);
});

app.get('/api/rounds/:id/:round', async (req, res) => {
  const id = req.params.id;
  const round = req.params.round;
  const response = await fetch(
    `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${id}/${round}`,
    {
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': `${process.env.API_KEY}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  res.send(data.api.fixtures);
});

app.get('/api/rounds/:id/:number', async (req, res) => {
  const id = req.params.id;
  const number = req.params.number;
  const response = await fetch(
    `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${id}/next/${number}`,
    {
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': `${process.env.API_KEY}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  res.send(data.api.fixtures);
});

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello from server' });
});

// Serve production bundle
app.use(express.static('dist'));

// Handle client routing, return all requests to the app
app.get('*', (_request, response) => {
  response.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
