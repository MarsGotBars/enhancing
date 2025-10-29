import express from 'express';
import arc from '@architect/functions';

const app = express();

// Let Architect routes handle HTTP requests
app.all('*', (req, res) => {
  // Just call async handler, no need to await
  arc.http.async(req, res).catch(err => {
    console.error(err);
    if (!res.headersSent) res.status(500).send('Internal Server Error');
  });
});

// Use Render port or default 3333
const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
