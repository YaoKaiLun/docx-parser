import libwmf from 'libwmf';
import os from 'os';
import fs from 'fs';

export function wmf2png(sourcePath, targetPath) {
  return new Promise((resolve, reject) => {
    libwmf(sourcePath).toPNG(targetPath, err => {
      if (err) {
        reject(err);
      }

      resolve(true);
    });
  });
}

export function wmf2pngBase64(sourcePath) {
  return new Promise((resolve, reject) => {
    const tempDir = os.tmpdir();
    const targetPath = `${tempDir}/${new Date().getTime()}.png`;

    libwmf(sourcePath).toPNG(targetPath, err => {
      console.log('err', err)
      if (err) {
        reject(err);
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