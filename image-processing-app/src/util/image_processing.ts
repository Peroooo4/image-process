import sharp from 'sharp';
import path from 'path';

const resizeImage = async (
  imageName: string,
  width: number,
  height: number
): Promise<string | null> => {
  const inputPath = path.resolve('assets', `${imageName}.jpg`); // Assuming images are in 'assets'
  const outputPath = path.resolve(
    'assets/thumb',
    `<span class="math-inline">\{imageName\}\_</span>{width}_${height}.jpg`
  );

  try {
    await sharp(inputPath)
      .resize(width, height)
      .toFile(outputPath);
    return outputPath;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default resizeImage;