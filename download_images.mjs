import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  {
    filename: 'housekeeping.png',
    url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop',
  },
  {
    filename: 'mep_operations.png',
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    filename: 'security_command.png',
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop',
  },
  {
    filename: 'stp_wtp.png',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
  },
  {
    filename: 'landscaping.png',
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop',
  },
  {
    filename: 'pest_control.png',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
  },
  {
    filename: 'helpdesk.png',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    filename: 'parking_pool.png',
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1000&auto=format&fit=crop',
  },
];

const destDir = path.join(process.cwd(), 'public', 'images');

function fetchUrl(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
      }
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved ${path.basename(destPath)} (${fs.statSync(destPath).size} bytes)`);
        resolve();
      });
    }).on('error', reject);
  });
}

async function main() {
  for (const img of images) {
    const dest = path.join(destDir, img.filename);
    try {
      await fetchUrl(img.url, dest);
    } catch (e) {
      console.error(`Error ${img.filename}: ${e.message}`);
    }
  }
}

main();
