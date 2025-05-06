import express, { Request, Response } from 'express';
import routes from './routes';
import path from 'path';

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));  // Corrected line

app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html')); // Corrected line
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});