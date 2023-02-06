import libwmf from './libwmf';
import os from 'os';
import fs from 'fs';

const tempDir = os.tmpdir();

export function wmf2png(sourcePath, targetPath) {
  const isBuffer = typeof sourcePath === 'object';

  if (isBuffer) {
    sourcePath = convertBufferToPath(sourcePath);
  }

  return new Promise((resolve, reject) => {
    libwmf(sourcePath).toPNG(targetPath, err => {
      if (err) {
        reject(err);
      }

      if (isBuffer) {
        fs.rmSync(sourcePath);
      }

      resolve(true);
    });
  });
}

export function wmf2pngSync(sourcePath, targetPath) {
  const isBuffer = typeof sourcePath === 'object';

  if (isBuffer) {
    sourcePath = convertBufferToPath(sourcePath);
  }

  try {
    libwmf(sourcePath).toPNGSync(targetPath);
  } catch (error) {
    throw error;
  } finally {
    if (isBuffer) {
      fs.rmSync(sourcePath);
    }
  }
}

export function wmf2pngBase64(sourcePath) {
  const isBuffer = typeof sourcePath === 'object';

  if (isBuffer) {
    sourcePath = convertBufferToPath(sourcePath);
  }

  return new Promise((resolve, reject) => {
    const targetPath = `${tempDir}/${new Date().getTime()}.png`;

    libwmf(sourcePath).toPNG(targetPath, err => {
      if (err) {
        reject(err);
      }

      if (isBuffer) {
        fs.rmSync(sourcePath);
      }

      try {
        const bitmap = fs.readFileSync(targetPath);
        const base64 = Buffer.from(bitmap).toString('base64');
        const pngBase64  = `data:image/png;base64,${base64}`;
        fs.rmSync(targetPath);
        resolve(pngBase64);
      } catch (error) {
        reject(err);
      }
    });
  });
}

export function wmf2pngBase64Sync(sourcePath) {
  const isBuffer = typeof sourcePath === 'object';
  if (isBuffer) {
    sourcePath = convertBufferToPath(sourcePath);
  }

  const targetPath = `${tempDir}/${new Date().getTime()}.svg`;

  try {
    libwmf(sourcePath).toPNGSync(targetPath); 

    const bitmap = fs.readFileSync(targetPath);
    const base64 = Buffer.from(bitmap).toString('base64');
    const pngBase64  = `data:image/svg;base64,${base64}`;
    return pngBase64;
  } catch (error) {
    throw error; 
  } finally {
    if (isBuffer) {
      fs.rmSync(sourcePath);
    }
  }
}

function convertBufferToPath(buffer) {
  const targetPath = `${tempDir}/${new Date().getTime()}.wmf`;
  fs.writeFileSync(targetPath, buffer);
  return targetPath;
}