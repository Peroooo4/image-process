import express, { Request, Response } from 'express';
import resizeImage from '../../util/image_processing';
import fs from 'fs';
import path from 'path';

const images = express.Router();

images.get('/', async (req: Request, res: Response): Promise<void> => { 
  const imageName = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  if (!imageName || !width || !height) {
    res.status(400).send('Missing parameters: filename, width, or height');
    return;
  }

  const resizedImagePath = path.resolve(
    'assets/thumb',
    `${imageName}_${width}_${height}.jpg`
  );

  if (fs.existsSync(resizedImagePath)) {
    return res.sendFile(resizedImagePath);
  }

  const newImagePath = await resizeImage(imageName, width, height);

  if (newImagePath) {
    return res.sendFile(newImagePath);
  } else {
    res.status(500).send('Image resizing failed');
    return;
  }
});

export default images;